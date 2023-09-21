import React from "react";
import "./Apps.css";
import { IconType } from "react-icons";

interface IAppsProps {
  name: string;
  icon: IconType;
}

class Apps extends React.Component<IAppsProps> {
  render(): React.ReactNode {
    const { name, icon: Icon } = this.props;

    return (
      <div className="appContainer flex center gap-1">
        <div className="appImage flex center">
          <Icon />
        </div>
        <div className="appName flex center">{name}</div>
      </div>
    );
  }
}

export default Apps;
