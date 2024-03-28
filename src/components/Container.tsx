import "./Container.css";
import Bio from "./Bio/Bio";
import NavBar from "./NavBar";
import Apps from "./Apps/Apps";
import Error from "./Apps/Error";
import { TbBrandVscode } from "react-icons/tb";
import { SiNotion } from "react-icons/si";
import { IoFolderOpenSharp } from "react-icons/io5";
import { PiCertificateDuotone } from "react-icons/pi";
import Development from "./Development/Development";
import { AiFillMail } from "react-icons/ai";
import Form from "./Email/Form";
import Music from "./Music/Music";
import { BsSpotify } from "react-icons/bs";
import VsCode from "./VsCode/VsCode";
import Folder from "./Folder/Folder";
import Technologies from "./Technologies/Technologies";
import Certifications from "./Certifications/Certifications";
function Container() {
  const icons = [
    {
      name: "Visual Studio Code",
      icon: <TbBrandVscode color="#007ACC" className="appImageIcon" />,
      hero: <VsCode />,
      large: true,
    },
    {
      name: "Spotify",
      icon: <BsSpotify color="green" className="appImageIcon" />,
      hero: <Music />,
      auto: true,
    },
    {
      name: "Notion",
      icon: <SiNotion color="#000" className="appImageIcon" />,
      hero: <Error />,
    },
    {
      name: "Files",
      icon: <IoFolderOpenSharp color="#007ACC" className="appImageIcon" />,
      hero: <Error />,
    },
    {
      name: "Email",
      icon: <AiFillMail color="#2c80b7" className="appImageIcon" />,
      hero: <Form />,
      auto: true,
    },
    {
      name: "Certificados",
      icon: <PiCertificateDuotone color="#007ACC" className="appImageIcon" />,
      hero: <Certifications />,
      auto: true,
    },
  ];

  return (
    <div className="container boxShadow border">
      <NavBar />
      <div className="osBody flex flex-column wrap">
        <div className="osBodyTop flex wrap">
          <div className="osBodyLeft">
            <Bio />
          </div>
          <div className="osBodyRight">
            <Technologies />
          </div>
        </div>
        <div className="osBodyBottom flex flex-1">
          <div className="osBodyLeft flex wrap">
            {icons.map((icon) => (
              <div>
                <Apps
                  key={icon.name}
                  name={icon.name}
                  icon={() => icon.icon}
                  hero={icon.hero}
                  large={icon.large}
                  auto={icon.auto}
                />
              </div>
            ))}
          </div>
          <div className="osBodyRight flex flex-1 wrap">
            <Folder />
          </div>
        </div>
      </div>
      <div className="tagName border boxShadow">CLAYTON</div>
      <Development />
    </div>
  );
}

export default Container;
