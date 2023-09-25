import "./GenericHeader.css";
import { IconType } from "react-icons";

interface IGenericHeader {
  title: string;
  icon: IconType;
}

function GenericHeader(props: IGenericHeader) {
  const { title, icon: Icon } = props;
  return (
    <div className="bioHeader flex gap-2">
      <div className="flex gap-1">
        <div className="bioHeaderIcon"></div>
        <div className="bioHeaderIcon"></div>
        <div className="bioHeaderIcon"></div>
      </div>
      <div className="bioHeaderTitle flex-1">{title}</div>
      <Icon className="bioHeaderIcons" color={"#ffffff"} />
    </div>
  );
}

export default GenericHeader;
