import React from "react";
import "./BioFooter.css";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

class BioFooter extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="bioFooter flex center gap-3">
        <div className="flex gap-1">
          <BiLogoLinkedin />
          <a
            href="https://linkedin.com/in/srclayton"
            target="_blank"
            className="bioSocialText"
          >
            @srclayton ↗
          </a>
        </div>
        <div className="flex gap-1">
          <BsGithub />
          <a
            className="bioSocialText"
            href="https://github.com/srclayton"
            target="_blank"
          >
            @srclayton↗
          </a>
        </div>
      </div>
    );
  }
}

export default BioFooter;
