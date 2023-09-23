import "./GenericHeader.css";
import { FiUser } from "react-icons/fi";

interface IGenericHeader {
  title: string;
}

function GenericHeader(props: IGenericHeader) {
  const { title } = props;
  return (
    <div className="bioHeader flex gap-2">
      <div className="flex gap-1">
        <div className="bioHeaderIcon"></div>
        <div className="bioHeaderIcon"></div>
        <div className="bioHeaderIcon"></div>
      </div>
      <div className="bioHeaderTitle flex-1">{title}</div>
      <FiUser color={"#ffffff"} />
    </div>
  );
}

export default GenericHeader;
