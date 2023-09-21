import React from "react";
import "./Container.css";
import Bio from "./Bio/Bio";

class Container extends React.Component {
  currentDateTime: Date = new Date();

  render(): React.ReactNode {
    const formattedDateTime = this.currentDateTime.toLocaleString(); // Converter Date em string

    return (
      <div className="container boxShadow border">
        <div className="osNavbar">
          <div className="osName">@SROCHA.OS</div>
          <div className="osInfo flex-1">
            CONFIG 2023 *** {formattedDateTime} ***
          </div>
          <div className="osGeo">02:39PM (GMT-3) | @ BRA</div>
        </div>
        <div className="osBody flex">
          <Bio />
        </div>
      </div>
    );
  }
}

export default Container;
