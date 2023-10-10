import React from "react";
import { IconType } from "react-icons";

interface IFolderAppsProps {
  name: string;
  icon: IconType;
  setState: () => void;
}
function FolderApps(props: IFolderAppsProps) {
  const { setState, name, icon: Icon } = props;

  return (
    <>
      <div onClick={setState} className="appContainer flex center">
        <div className="appImage flex center">
          <Icon className="appImageIcon" />
        </div>
        <div className="appName">{name}</div>
      </div>
    </>
  );
}

export default FolderApps;
