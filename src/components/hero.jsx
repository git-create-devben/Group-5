// Hero component - assigned to [member name]
import "./Hero.css";
import Image from "../assets/Image.png";

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
            src={Image}
            alt="Hero planet image"
            className="hero__planet-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
