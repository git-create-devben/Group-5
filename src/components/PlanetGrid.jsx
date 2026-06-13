import { useState, useEffect } from 'react';
import PlanetCard from './PlanetCard';
import './PlanetGrid.css';

// Replace this URL with the actual API endpoint provided in your assignment
const API_URL = 'https://anurella.github.io/json/planets.json';

function PlanetGrid() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch planet data');
        return res.json();
      })
      .then((data) => {
        setPlanets(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section id="planets" className="planet-grid-section">
      <div className="container">
        <h2 className="section-title">Visualizing the Differences Between Planets</h2>
        <p className="section-subtitle">
          Each planet in our solar system has unique physical characteristics.
          Visual comparisons help highlight how vastly different terrestrial
          planets are from gas giants and ice giants.
        </p>

        {loading && (
          <div className="planet-grid__status">
            <div className="planet-grid__spinner" />
            <p>Loading planets...</p>
          </div>
        )}

        {error && (
          <div className="planet-grid__status planet-grid__error">
            <p>⚠️ {error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="planet-grid__grid">
            {planets.map((planet, index) => (
              <PlanetCard
                key={index}
                planet={planet.planet}
                distanceFromSun={planet.distanceFromSun}
                image={planet.image}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default PlanetGrid;
