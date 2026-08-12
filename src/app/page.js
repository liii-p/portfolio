import Navbar from "../Components/Navbar/Navbar.jsx";
import Intro from "../Components/Intro/Intro.jsx";
import Experience from "../Components/Experience/Experience.jsx";
import Education from "../Components/Education/Education.jsx";
import Tech from "../Components/Tech/Tech.jsx";
import Projects from "../Components/Projects/Projects.jsx";
import Contact from "../Components/Contact/Contact.jsx";

export default function Page() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Experience />
      <Projects />
      <Education />
      <Tech />
      <Contact />
    </div>
  );
}
