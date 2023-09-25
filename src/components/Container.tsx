import "./Container.css";
import Bio from "./Bio/Bio";
import NavBar from "./NavBar";
import Apps from "./Apps/Apps";
import { TbBrandVscode } from "react-icons/tb";
import { SiNotion, SiYoutubemusic } from "react-icons/si";
import { IoFolderOpenSharp } from "react-icons/io5";
import Development from "./Development/Development";
function Container() {
  const icons = [
    {
      name: "Visual Studio Code",
      icon: <TbBrandVscode color="#007ACC" className="appImageIcon" />,
    },
    {
      name: "Youtube Music",
      icon: <SiYoutubemusic color="red" className="appImageIcon" />,
    },
    {
      name: "Notion",
      icon: <SiNotion color="#000" className="appImageIcon" />,
    },
    {
      name: "Files",
      icon: <IoFolderOpenSharp color="#007ACC" className="appImageIcon" />,
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
          <div className="osBodyRight flex flex-1 wrap">
            {icons.map((icon) => (
              <Apps key={icon.name} name={icon.name} icon={() => icon.icon} />
            ))}
          </div>
        </div>
        <div className="osBodyBottom flex flex-1">
          <div className="osBodyLeft flex wrap">
            {icons.map((icon) => (
              <Apps key={icon.name} name={icon.name} icon={() => icon.icon} />
            ))}
          </div>
          <div className="osBodyRight flex flex-1 wrap"></div>
        </div>
      </div>
      <div className="tagName border boxShadow">CLAYTON</div>
      <Development />
    </div>
  );
}

export default Container;
