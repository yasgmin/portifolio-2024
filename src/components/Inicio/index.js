import "./inicio.css";
import Perfil from "../../assets/foto profissional 1.svg";

const Inicio = () => {

  return (
    <body>
        <div className="geral">
            <div className="texto">
                'Hi <span className="tchau">🖐️</span>,<br/> 
                My name is <br/> <span>Yasmin </span><br/> 
                I build things for web'<br/> 
            </div>
            <img src={Perfil} alt='Perfil profissional Yasmin'/>
        </div>    
    </body>
  );
};

export default Inicio