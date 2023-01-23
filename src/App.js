import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
      
      <SocialLinks />
    </div>
  );
}

export default App;
