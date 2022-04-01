//Project files
import Techstack from "./Techstack";
import techData from "../Data/technologyList.json";

export default function Tech() {
  const technologyData = techData.map((item) => (
    <Techstack key={item.id} techName={item.title} skills={item.skills} techIcon={item.logo} />
  ));

  return (
    <div className="tech" id="tech stack">
      <h2 className="tech-title">Technologies</h2>
      <div className="tech-container">
        <p>
        Here are Some technologies that I already know and am continuously learning. Despite All of this I'm able to learn any technology related to the web and Programmable Hardware. Right now I feel comfortable with javascript and python technologies. Previously I used to work with PIC microcontroller/MicroC, Arduino and Electronics. Either from my curiosity or necessity at least once I have touched most of the major programming languages that currently exist. From Assembly to C and Java to Python, Javascript couldn't escape my curious mind.
        </p>
        <div className="tech-list">{technologyData}</div>
      </div>
    </div>
  );
}
