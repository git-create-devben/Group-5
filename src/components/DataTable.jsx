import "./DataTable.css";

const tableData = {
  terrestrial: [
    {
      name: "Mercury",
      mass: "0.330",
      diameter: "4,878",
      density: "5427",
      gravity: "3.7",
    },
    {
      name: "Venus",
      mass: "0.330",
      diameter: "4,878",
      density: "5427",
      gravity: "3.7",
    },
    {
      name: "Earth",
      mass: "0.330",
      diameter: "4,878",
      density: "5427",
      gravity: "3.7",
    },
    {
      name: "Mars",
      mass: "0.330",
      diameter: "4,878",
      density: "5427",
      gravity: "3.7",
    },
  ],
  gasGiants: [
    {
      name: "Jupiter",
      mass: "0.330",
      diameter: "4,878",
      density: "5472",
      gravity: "3.7",
    },
    {
      name: "Saturn",
      mass: "0.330",
      diameter: "4,878",
      density: "5472",
      gravity: "3.7",
    },
  ],
  iceGiants: [
    {
      name: "Uranus",
      mass: "0.330",
      diameter: "4,878",
      density: "5472",
      gravity: "3.7",
    },
    {
      name: "Neptune",
      mass: "0.330",
      diameter: "4878",
      density: "5472",
      gravity: "3.7",
    },
  ],
  dwarf: [
    {
      name: "Pluto",
      mass: "0.330",
      diameter: "4,878",
      density: "5472",
      gravity: "3.7",
    },
  ],
};

function DataTable() {
  return (
    <section className="data-table-section">
      <div className="container">
        <h2 className="section-title">Planetary Facts at a Glance</h2>
        <p className="section-subtitle">
          Below is a comparative table of major planets in our solar system. The
          data highlights key physical properties used by astronomers and
          researchers worldwide.
        </p>

        <p className="data-table__source">
          Data about the planets of our solar system (Planetary facts taken from
          NASA)
        </p>

        <div className="data-table__wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th colSpan="3"></th>
                <th>Name</th>
                <th>
                  Mass (10<sup>24</sup>kg)
                </th>
                <th>Diameter (km)</th>
                <th>Density (kg/m3)</th>
                <th>Gravity (m/s2)</th>
              </tr>
            </thead>
            <tbody>
              {/* Terrestrial Planets */}
              <tr>
                <td
                  className="group-label"
                  rowSpan={tableData.terrestrial.length}
                  colSpan="3"
                >
                  Terrestrial Planets
                </td>
                <td>{tableData.terrestrial[0].name}</td>
                <td>{tableData.terrestrial[0].mass}</td>
                <td>{tableData.terrestrial[0].diameter}</td>
                <td>{tableData.terrestrial[0].density}</td>
                <td>{tableData.terrestrial[0].gravity}</td>
              </tr>
              {tableData.terrestrial.slice(1).map((p) => (
                <tr key={p.name}>
                  <td>{p.name}</td>
                  <td>{p.mass}</td>
                  <td>{p.diameter}</td>
                  <td>{p.density}</td>
                  <td>{p.gravity}</td>
                </tr>
              ))}

              {/* Jovian Planets - Gas Giants */}
              <tr>
                <td
                  className="group-label"
                  rowSpan={
                    tableData.gasGiants.length + tableData.iceGiants.length
                  }
                  colSpan="1"
                >
                  Jovian Planets
                </td>
                <td
                  className="subgroup-label"
                  rowSpan={tableData.gasGiants.length}
                  colSpan="2"
                >
                  Gas Giants
                </td>
                <td>{tableData.gasGiants[0].name}</td>
                <td>{tableData.gasGiants[0].mass}</td>
                <td>{tableData.gasGiants[0].diameter}</td>
                <td>{tableData.gasGiants[0].density}</td>
                <td>{tableData.gasGiants[0].gravity}</td>
              </tr>
              {tableData.gasGiants.slice(1).map((p) => (
                <tr key={p.name}>
                  <td>{p.name}</td>
                  <td>{p.mass}</td>
                  <td>{p.diameter}</td>
                  <td>{p.density}</td>
                  <td>{p.gravity}</td>
                </tr>
              ))}

              {/* Ice Giants */}
              <tr>
                <td
                  className="subgroup-label"
                  rowSpan={tableData.iceGiants.length}
                  colSpan="2"
                >
                  Ice Giants
                </td>
                <td>{tableData.iceGiants[0].name}</td>
                <td>{tableData.iceGiants[0].mass}</td>
                <td>{tableData.iceGiants[0].diameter}</td>
                <td>{tableData.iceGiants[0].density}</td>
                <td>{tableData.iceGiants[0].gravity}</td>
              </tr>
              {tableData.iceGiants.slice(1).map((p) => (
                <tr key={p.name}>
                  <td>{p.name}</td>
                  <td>{p.mass}</td>
                  <td>{p.diameter}</td>
                  <td>{p.density}</td>
                  <td>{p.gravity}</td>
                </tr>
              ))}

              {/* Dwarf Planets */}
              <tr>
                <td className="group-label" colSpan="3">
                  Dwarf Planets
                </td>
                <td>{tableData.dwarf[0].name}</td>
                <td>{tableData.dwarf[0].mass}</td>
                <td>{tableData.dwarf[0].diameter}</td>
                <td>{tableData.dwarf[0].density}</td>
                <td>{tableData.dwarf[0].gravity}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default DataTable;
