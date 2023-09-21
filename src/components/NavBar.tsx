import React from "react";
import "./NavBar.css";
import { FaDev } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
class NavBar extends React.Component {
  timeElapsed = Date.now();
  today = new Date(this.timeElapsed);
  render(): React.ReactNode {
    const formattedDate = this.today.toLocaleDateString("pt-BR", {
      month: "long",
      day: "numeric",
      weekday: "short",
    });
    const formattedTime = this.today.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const year = this.today.getFullYear();
    return (
      <div className="osNavbar">
        <div className="osName flex gap-1">
          <FaDev />
          SROCHA.OS
        </div>
        <div className="osInfo flex-1">
          CONFIG {year} *** {formattedDate} ***
        </div>
        <div className="osGeo flex gap-1">
          <>{formattedTime} (GMT-3)</>
          <>|</>
          <TfiWorld />
          <>BRA</>
        </div>
      </div>
    );
  }
}

export default NavBar;
