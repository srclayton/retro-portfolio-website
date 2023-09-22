import "./Apps.css";
import { IconType } from "react-icons";

interface IAppsProps {
  name: string;
  icon: IconType;
}

function Apps(props: IAppsProps) {
  const { name, icon: Icon } = props;

  return (
    <div className="appContainer flex center gap-1">
      <div className="appImage flex center">
        <Icon />
      </div>
      <div className="appName flex center">{name}</div>
    </div>
  );
}

export default Apps;
