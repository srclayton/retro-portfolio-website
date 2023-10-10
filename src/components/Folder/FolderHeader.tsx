import { AiOutlineFolderOpen } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./FolderHeader.css";

interface IFolderHeader {
  currentFolder: string;
  state: boolean;
  setState: () => void;
  setFolder: (folder: string) => void;
}
function FolderHeader(props: IFolderHeader) {
  const { state, setState, currentFolder, setFolder } = props;
  const handlerClick = () => {
    setState();
    setFolder("");
  };
  return (
    <div className="folderHeader flex center gap-2">
      {/* <div className="flex gap-1"> */}
      {/* <div className="folderHeaderIcon"></div> */}
      {/* <div className="folderHeaderIcon"></div> */}
      {/* <div className="folderHeaderIcon"></div> */}
      {/* </div> */}
      <div className="folderHeaderNav flex flex-1 gap-1">
        {!state ? (
          <IoIosArrowBack style={{ opacity: 0.4 }} />
        ) : (
          <IoIosArrowBack
            style={{ cursor: "pointer" }}
            onClick={handlerClick}
          />
        )}
        <IoIosArrowForward style={{ opacity: 0.4 }} />
        <div className="breadcrumb flex">
          <div className="breadcrumbItem">Home</div>
          <div className="breadcrumbItem">Projects</div>
          <div className="breadcrumbItem">{currentFolder}</div>
        </div>
      </div>

      <AiOutlineFolderOpen />
    </div>
  );
}

export default FolderHeader;
