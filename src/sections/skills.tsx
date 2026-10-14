import { FaPython, FaReact, FaJava, FaDocker, FaGitAlt, FaAws } from "react-icons/fa";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { SiFastapi, SiPostgresql, SiTypescript, SiTwilio, SiGooglegemini, SiNetlify, SiCloudinary, SiSpringboot, SiRedis, SiMongodb, SiApachekafka, SiGithubactions, SiSpacy } from "react-icons/si";
const groups = [
  {title:"Backend & data",description:"APIs, services, and the data behind them.",skills:[{name:"Python",icon:FaPython},{name:"FastAPI",icon:SiFastapi},{name:"Java",icon:FaJava},{name:"Spring Boot",icon:SiSpringboot},{name:"PostgreSQL",icon:SiPostgresql},{name:"Redis",icon:SiRedis},{name:"MongoDB",icon:SiMongodb},{name:"Kafka",icon:SiApachekafka}]},
  {title:"Frontend & delivery",description:"Interfaces, tooling, and deployment. I’ve also explored AWS.",skills:[{name:"React",icon:FaReact},{name:"TypeScript",icon:SiTypescript},{name:"Docker",icon:FaDocker},{name:"Git",icon:FaGitAlt},{name:"GitHub Actions",icon:SiGithubactions},{name:"Netlify",icon:SiNetlify},{name:"AWS",icon:FaAws}]},
  {title:"AI & integrations",description:"Language processing and connected workflows.",skills:[{name:"spaCy",icon:SiSpacy},{name:"FastText",icon:HiOutlineChatAlt2},{name:"Gemini API",icon:SiGooglegemini},{name:"Twilio",icon:SiTwilio},{name:"Cloudinary",icon:SiCloudinary}]},
];
export default function Skills() {
  return <section className="skills-container" id="skills" aria-labelledby="skills-title"><div className="container"><div className="section-heading"><span className="eyebrow">MY TOOLKIT</span><h2 id="skills-title">Skills & <span>technologies.</span></h2><p>The tools I use to build, connect, and deliver.</p></div><div className="skills-grid">{groups.map(group=><div className="skill-group" key={group.title}><h3>{group.title}</h3><p>{group.description}</p><div className="skill-list">{group.skills.map(({name,icon:Icon})=><div className="skill-item" key={name}><span className="skill-icon"><Icon aria-hidden="true" /></span><span>{name}</span></div>)}</div></div>)}</div></div></section>;
}
