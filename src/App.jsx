import "./styles/global.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MiddleSection from "./components/MiddleSection";
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
        <MiddleSection />
        <PlanetGrid />
        <DataTable />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
