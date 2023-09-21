import React, { ReactNode } from "react";
import "./BioHero.css";

class BioHero extends React.Component {
  render(): ReactNode {
    return (
      <div className="bioHero center flex gap-3">
        <div className="bioHeroLeft">
          <div className="bioHeroBlackBox flex center">
            <div className="bioHeroWhiteBox flex center">
              <img
                src="https://github.com/srclayton.png"
                alt="user_image"
                width={168}
              />
            </div>
          </div>
        </div>
        <div className="bioHeroRight">
          <h1 className="bioHeroRightName">Clayton Rocha</h1>
          <p className="bioHeroRightDescription">
            Entusiasmado e comprometido com a aprendizagem contínua, estou
            ansioso para enfrentar desafios e contribuir com soluções
            inovadoras.
          </p>
        </div>
      </div>
    );
  }
}

export default BioHero;
