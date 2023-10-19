import { TbBrandCpp, TbBrandNextjs } from "react-icons/tb";
import Apps from "../Apps/Apps";
import GenericHeader from "../Generics/GenericHeader";
import "./Technologies.css";
import {
  BiCodeAlt,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiFastify, SiMicrosoftsqlserver } from "react-icons/si";
import { LiaJava } from "react-icons/lia";

function Technologies() {
  const technologies = [
    {
      name: "C/C++",
      icon: <TbBrandCpp className="appImageIcon" />,
    },
    {
      name: "Java",
      icon: <LiaJava color="#5382e1" className="appImageIcon" />,
    },
    {
      name: "JavaScript",
      icon: <BiLogoJavascript color="#f0db4f" className="appImageIcon" />,
    },
    {
      name: "TypeScript",
      icon: <BiLogoTypescript color="#007acc" className="appImageIcon" />,
    },
    {
      name: "Node.js",
      icon: <BiLogoNodejs color={"#303030"} className="appImageIcon" />,
    },
    {
      name: "React",
      icon: <BiLogoReact color="#61dafb" className="appImageIcon" />,
    },
    {
      name: "Next",
      icon: <TbBrandNextjs className="appImageIcon" />,
    },
    {
      name: "Fastify",
      icon: <SiFastify className="appImageIcon" />,
    },
    {
      name: "MongoDB",
      icon: <BiLogoMongodb color="#0cd45b" className="appImageIcon" />,
    },
    {
      name: "MSSQL",
      icon: <SiMicrosoftsqlserver color="#c74835" className="appImageIcon" />,
    },
  ];
  return (
    <div className="technologies border boxShadow flex flex-column">
      <GenericHeader title="Tecnologias" icon={() => <BiCodeAlt />} />
      <div className="techContainer flex flex-1 wrap">
        {technologies.map((tech) => (
          <div className="techIcon">
            <Apps
              hero={<></>}
              icon={() => tech.icon}
              name={tech.name}
              isHref={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
