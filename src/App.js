import './App.css';
import NavBar from './components/NavBar';
import Inicio from './components/Inicio';
import About from './components/About';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Inicio/>
      <About/>
      <TechStack/>

    </div>
  );
}

export default App;
