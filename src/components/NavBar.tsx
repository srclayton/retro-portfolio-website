import { useState, useEffect } from "react";
import "./NavBar.css";
import { FaDev } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

function NavBar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentTime.toLocaleDateString("pt-BR", {
    month: "long",
    day: "numeric",
    weekday: "short",
  });
  const formattedTime = currentTime.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const year = currentTime.getFullYear();

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

export default NavBar;
