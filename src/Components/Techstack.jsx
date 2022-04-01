//Project files

import Level from "./Level";


export default function Techstack({ techName, techIcon, skills }) {
  return (
    <div className="container">
      <img className="tech-img" src={techIcon} alt="js" />
      <div><Level val={skills}/></div>
      <p>{techName}</p>
    </div>
  );
}
