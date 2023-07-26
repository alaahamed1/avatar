
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import img from "./main-img.jpg"
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar(){
  return(
    <img src={img}  className="avatar" alt="main photo"/>
  )
}
function Intro(){
  return(
    <div className="data">
      <h1>Alaa.H</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
    </div>
  )
}
function SkillList(){
  return(
    <div className="skill-list">
      <Skill skill="html & css"  emoji="💪" color="blue"/>
      <Skill skill="React"  emoji="💭" color="orange"/>
      <Skill skill="JavaScript"  emoji="🏁 " color="yellow"/>
      <Skill skill="Svelte"  emoji="😎 " color="orangered"/>
    </div>
  )
}
function Skill(props){
  const color = {backgroundColor : props.color}
  return(
    <div className="skill" style={color}  >
      <p x>{props.skill}{props.emoji}</p>
    </div>
  )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

