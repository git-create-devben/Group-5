import "./styles/global.css";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PlanetGrid from "./components/PlanetGrid";
import DataTable from "./components/DataTable";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PlanetGrid />
        <DataTable />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
