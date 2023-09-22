import "./Container.css";
import Bio from "./Bio/Bio";
import NavBar from "./NavBar";
import Apps from "./Apps/Apps";
import { TbBrandVscode } from "react-icons/tb";
import { SiNotion, SiYoutubemusic } from "react-icons/si";
import { IoFolderOpenSharp } from "react-icons/io5";
function Container() {
  return (
    <div className="container boxShadow border">
      <NavBar />
      <div className="osBody flex wrap">
        <Bio />
        <Apps
          name="Visual Studio Code"
          icon={() => (
            <TbBrandVscode color="#007ACC" className="appImageIcon" />
          )}
        />
        <Apps
          name="Youtube Music"
          icon={() => <SiYoutubemusic color="red" className="appImageIcon" />}
        />
        <Apps
          name="Notion"
          icon={() => <SiNotion color="#000" className="appImageIcon" />}
        />
        <Apps
          name="Files"
          icon={() => (
            <IoFolderOpenSharp color="#007ACC" className="appImageIcon" />
          )}
        />
      </div>
    </div>
  );
}

export default Container;
