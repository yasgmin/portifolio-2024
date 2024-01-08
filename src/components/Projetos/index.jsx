import "./projetos.css";
import projetodefault from "../../assets/projeto1.png";

const Projetos = () => (
  <main id="projects">
    {" "}
    {/* Ao inves de cada card ser uma section, cada card é uma div dentro de uma section */}
    <section className="styles">
      <div className="projectCard">
        <img src={projetodefault} alt="Projeto1" />

        <h5>Organo</h5>
        <p>
          Projeto feito baseado no Organo ensinado no curso da alura. Foi feito
          uma seleção de times no spotify.
        </p>
        <div className="projectLinks">
          <a
            className="gitButton"
            href="https://github.com/yasgmin/organo-javascript"
          >
            Github
          </a>
          <a
            className="gitButton"
            href="https://github.com/yasgmin/organo-javascript"
          >
            Projeto
          </a>
        </div>
      </div>
      <div className="projectCard">
        <img src={projetodefault} alt="Projeto1" />

        <h5>Organo</h5>
        <p>
          Projeto feito baseado no Organo ensinado no curso da alura. Foi feito
          uma seleção de times no spotify.
        </p>
        <div className="projectLinks">
          <a
            className="gitButton"
            href="https://github.com/yasgmin/organo-javascript"
          >
            Github
          </a>
          <a
            className="gitButton"
            href="https://github.com/yasgmin/organo-javascript"
          >
            Projeto
          </a>
        </div>
      </div>
      <div className="projectCard">
        <img src={projetodefault} alt="Projeto1" />

        <h5>Organo</h5>
        <p>
          Projeto feito baseado no Organo ensinado no curso da alura. Foi feito
          uma seleção de times no spotify.
        </p>
        <div className="projectLinks">
          <a
            className="gitButton"
            href="https://github.com/yasgmin/organo-javascript"
          >
            Github
          </a>
          <a
            className="gitButton"
            href="https://github.com/yasgmin/organo-javascript"
          >
            Projeto
          </a>
        </div>
      </div>
    </section>
  </main>
);

export default Projetos;
