import "./techstech.css";
import jsicon from "../../assets/jsicon.svg";
import cssicon from "../../assets/cssicon.svg";
import htmlicon from "../../assets/HTMLICON.svg";
import pythonicon from "../../assets/python.svg";
import reacticon from "../../assets/reacticon.svg";
import tsicon from "../../assets/typescript.svg";
import nodeicon from "../../assets/nodeicon.svg";

const TechStack = () => {
  return (
    <div className="stack" id="tech">
      <h1 className="titu">My Tech Stack</h1>
      <h2> Technologies I’ve been working with recently</h2>
      <div className="stackings">
        <ul>
          <li>
            <img src={jsicon} alt="javascript icon" />
          </li>
          <li>
            <img src={cssicon} alt="css icon" />
          </li>
          <li>
            <img src={htmlicon} alt="html icon" />
          </li>
          <li>
            <img src={reacticon} alt="react icon" />
          </li>
          <li>
            <img src={nodeicon} alt="node icon" />
          </li>
          <li>
            <img src={tsicon} alt="typescript icon" />
          </li>
          <li>
            <img src={pythonicon} alt="python icon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TechStack;
