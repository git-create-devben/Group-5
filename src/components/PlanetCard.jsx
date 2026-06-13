import "./PlanetCard.css";

function PlanetCard({ planet, distanceFromSun, image }) {
  return (
    <div className="planet-card">
      <figure className="planet-card__figure">
        <img
          src={image}
          alt={`Planet ${planet}`}
          className="planet-card__image"
          loading="lazy"
        />
      </figure>
      <div className="planet-card__info">
        <p className="planet-card__name">{planet}</p>
        <p className="planet-card__distance">{distanceFromSun} AU from Sun</p>
      </div>
    </div>
  );
}

export default PlanetCard;
