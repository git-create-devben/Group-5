import { useState } from "react";
import "./ContactForm.css";

const FORM_ENDPOINT = "https://whitebricks.com/tsacademy.php";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[+\d\s\-()]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    setServerError("");

    console.log("Form values:", formData);

    try {
      const formEncoded = new URLSearchParams({
        fullName: formData.fullName,
        phoneNumber: formData.phone,
        email: formData.email,
        message: formData.message,
      });

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formEncoded.toString(),
      });

      console.log("Response status:", res.status);
      const text = await res.text();
      console.log("Response text:", text);

      if (res.status === 200) {
        setSubmitted(true);
      } else {
        throw new Error("Submission failed. Please try again.");
      }
    } catch (err) {
      setServerError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact__inner">
        <h2 className="section-title">
          Have Questions About Planetary Science?
        </h2>
        <p className="section-subtitle">
          Interested in learning more about space, astronomy, or how planetary
          data is collected and analyzed? Reach out and we&apos;ll get back to
          you.
        </p>

        {submitted ? (
          <div className="contact__success">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="23" stroke="#1a56db" strokeWidth="2" />
              <path
                d="M14 24l8 8 12-14"
                stroke="#1a56db"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3>Message Sent!</h3>
            <p>
              Thank you for reaching out. We&apos;ll get back to you shortly.
            </p>
          </div>
        ) : (
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">
                  Full Name<span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={errors.fullName ? "error" : ""}
                />
                {errors.fullName && (
                  <span className="form-error">{errors.fullName}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email<span class="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error" : ""}
                />
                {errors.email && (
                  <span className="form-error">{errors.email}</span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">
                  Phone Number<span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Please enter a valid phone number..."
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? "error" : ""}
                />
                {errors.phone && (
                  <span className="form-error">{errors.phone}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message<span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows={4}
                  maxLength={500}
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? "error" : ""}
                />
                <span className="char-count">
                  {formData.message.length}/500 characters
                </span>
                {errors.message && (
                  <span className="form-error">{errors.message}</span>
                )}
              </div>
            </div>

            {serverError && <p className="form-server-error">{serverError}</p>}

            <button
              type="submit"
              className="btn btn--submit"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Submit →"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default ContactForm;