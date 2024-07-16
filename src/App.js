import "./App.scss";
import Intro from "./Intro/Intro";
import Tech from "./Tech/Tech";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Tech />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
