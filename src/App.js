import NavBar from "./components/NavBar";
import Herosec from "./components/Herosec";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Herosec></Herosec>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
