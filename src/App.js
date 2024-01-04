import "./App.css";
import NavBar from "./components/NavBar";
import Inicio from "./components/Inicio";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projetos from "./components/Projetos";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Inicio />
      <About />
      <TechStack />
      <Projetos />
      <Footer />
    </div>
  );
}

export default App;
