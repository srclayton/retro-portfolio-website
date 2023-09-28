import "./Apps.css";
import { IconType } from "react-icons";

interface IAppsProps {
  name: string;
  icon: IconType;
  onClick?: () => void;
}

function Apps(props: IAppsProps) {
  const { name, icon: Icon, onClick } = props;
  function handleIconClick() {
    onClick?.();
  }
  return (
    <div onClick={handleIconClick} className="appContainer flex center">
      <div className="appImage flex center">
        <Icon />
      </div>
      <div className="appName">{name}</div>
    </div>
  );
}

export default Apps;
