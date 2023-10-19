import "./Folder.css";
import Projects from "../Projects/Projects";
import FolderHeader from "./FolderHeader";
import { useState } from "react";
import Apps from "../Apps/Apps";
import Description from "../Projects/Description";
import { LiaReadme } from "react-icons/lia";
import { IoFolderOpenSharp } from "react-icons/io5";
import Error from "../Apps/Error";
import { IconType } from "react-icons";
import { TbWorldWww } from "react-icons/tb";
export type ProjectProps = {
  name: string;
  icon: IconType;
  description: string;
  urlTitle: string;
  url?: string;
  urlProducao?: string | null;
};

function Folder() {
  const [isAppOpen, setIsAppOpen] = useState(false);
  const [currentFolder, setCurrentFolder] = useState("");
  const [currentProject, setCurrentProject] = useState<ProjectProps | null>(
    null,
  );
  const handlerAppOpen = () => {
    setIsAppOpen(!isAppOpen);
  };
  const handlerCurrentFolder = (folder: string) => {
    setCurrentFolder(folder);
  };
  const handlerCurrentProject = (project: ProjectProps) => {
    setCurrentProject(project);
  };
  return (
    <div className="folder">
      <div className="border boxShadow">
        <FolderHeader
          setState={handlerAppOpen}
          setFolder={handlerCurrentFolder}
          state={isAppOpen}
          currentFolder={currentFolder}
        />
        <div className="folderBody flex wrap">
          {!isAppOpen ? (
            <Projects
              setState={handlerAppOpen}
              setFolder={handlerCurrentFolder}
              setProject={handlerCurrentProject}
            />
          ) : (
            <>
              <div>
                <Apps
                  name={currentFolder}
                  icon={() => <LiaReadme className="appImageIcon" />}
                  hero={
                    <Description
                      title={currentProject?.name ?? "project.title"}
                      text={currentProject?.description ?? "project.text"}
                      urlTitle={currentProject?.urlTitle ?? "project.urlTitle"}
                      url={currentProject?.url ?? "project.url"}
                      urlProducao={currentProject?.urlProducao ?? null}
                    />
                  }
                />
              </div>
              <div>
                <Apps
                  key={"project.name"}
                  name={"src"}
                  icon={() => (
                    <IoFolderOpenSharp
                      color="#007ACC"
                      className="appImageIcon"
                    />
                  )}
                  hero={<Error />}
                />
              </div>
              {currentProject?.urlProducao ? (
                <div>
                  <a
                    href={currentProject?.urlProducao}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Apps
                      key={"project.name"}
                      name={"PRODUCAO"}
                      icon={() => <TbWorldWww className="appImageIcon" />}
                      hero={<></>}
                      isHref={true}
                    />
                  </a>
                </div>
              ) : null}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Folder;
