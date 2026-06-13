// Hero component - assigned to [member name]
import "./Hero.css";

function Hero() {
  const scrollToPlanets = () => {
    document.getElementById("planets")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            Explore Our Solar
            <br />
            System Through Data
          </h1>
          <p className="hero__subtitle">
            Understand the planets not just by name, but by measurable facts.
            From size and mass to gravity and density, this page breaks down the
            solar system in a clear, data-driven way.
          </p>
          <div className="hero__ctas">
            <button className="btn btn--primary" onClick={scrollToPlanets}>
              Explore the Data
            </button>
            <button className="btn btn--outline" onClick={scrollToContact}>
              Contact Us
            </button>
          </div>
        </div>
        <div className="hero__image">
          <img
            src="https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&q=80"
            alt="Earth from space"
            className="hero__planet-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
