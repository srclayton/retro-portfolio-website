import React from "react";
import "./BioHeader.css";
import { FiUser } from "react-icons/fi";

class BioHeader extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="bioHeader flex gap-2">
        <div className="flex gap-1">
          <div className="bioHeaderIcon"></div>
          <div className="bioHeaderIcon"></div>
          <div className="bioHeaderIcon"></div>
        </div>
        <div className="bioHeaderTitle flex-1">BIO.PDF</div>
        <FiUser color={"#ffffff"} />
      </div>
    );
  }
}

export default BioHeader;
