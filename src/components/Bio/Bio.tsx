import React from "react";
import "./Bio.css";
import BioHeader from "./BioHeader";
import BioHero from "./BioHero";
import BioFooter from "./BioFooter";

class Bio extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="bioContainer boxShadow border">
        <BioHeader />
        <BioHero />
        <BioFooter />
      </div>
    );
  }
}

export default Bio;
