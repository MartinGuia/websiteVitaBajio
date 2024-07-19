import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Services from "../components/Services";
import Catalogue from "../components/Catalogue";
import AboutUs from "../components/AboutUs";

function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Catalogue />

      
      <AboutUs />
    </>
  );
}

export default HomePage;
