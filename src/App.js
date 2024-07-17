import "./App.scss";
import Intro from "./Components/Intro/Intro.jsx";
import Education from "./Components/Education/Education.jsx"
import Tech from "./Components/Tech/Tech.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Contact from "./Contact/Contact.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Education />
      <Tech />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
