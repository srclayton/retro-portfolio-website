import { AiOutlineCloseCircle } from "react-icons/ai";
import "./GenericHeader.css";
import { IconType } from "react-icons";

interface IGenericHeader {
  title: string;
  icon?: IconType;
  onClose?: () => void;
}

function GenericHeader(props: IGenericHeader) {
  const { title, icon: Icon, onClose } = props;
  function handleIconClick() {
    onClose?.();
  }
  return (
    <div className="bioHeader flex gap-2">
      <div className="flex gap-1">
        <div className="bioHeaderIcon"></div>
        <div className="bioHeaderIcon"></div>
        <div className="bioHeaderIcon"></div>
      </div>
      <div className="bioHeaderTitle flex-1">{title}</div>
      {Icon ? (
        <Icon
          style={onClose && { cursor: "pointer" }}
          className="bioHeaderIcons"
          onClick={handleIconClick}
          color={"#ffffff"}
        />
      ) : (
        <AiOutlineCloseCircle
          style={onClose && { cursor: "pointer" }}
          className="bioHeaderIcons"
          onClick={handleIconClick}
          color={"#fff"}
        />
      )}
    </div>
  );
}

export default GenericHeader;
