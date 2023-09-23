import "./Container.css";
import Bio from "./Bio/Bio";
import NavBar from "./NavBar";
import Apps from "./Apps/Apps";
import { TbBrandVscode } from "react-icons/tb";
import { SiNotion, SiYoutubemusic } from "react-icons/si";
import { IoFolderOpenSharp } from "react-icons/io5";
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
      <div className="osBody flex flex-column flex-1 wrap">
        <div className="osBodyTop flex">
          <div className="osBodyLeft flex wrap">
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
    </div>
  );
}

export default Container;
