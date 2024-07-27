import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Services from "../components/Services";
import Catalogue from "../components/Catalogue";
import AboutUs from "../components/AboutUs";
import MyFooter from "../components/MyFooter";

function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Catalogue />

      
      <AboutUs />
      <MyFooter/>
    </>
  );
}

export default HomePage;
