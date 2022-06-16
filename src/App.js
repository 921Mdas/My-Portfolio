import Navbar from "./Components/Navbar/Navbar";
import Greet from "./Components/Greet/Greet";
import Network from "./Components/Network/Network";
import Sdx from "./Components/sideEffect/Sdx";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="Main">
      <Navbar />
      <Greet />
      <Network />
      <Sdx />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
