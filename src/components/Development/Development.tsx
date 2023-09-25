import React, { useRef, useEffect } from "react";
import { AiFillWarning } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import "./Development.css";
import GenericHeader from "../Generics/GenericHeader";

function Development() {
  const draggableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMouseDown = false;
    let initX = 0;
    let initY = 0;
    let width = 0;
    let height = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isMouseDown = true;
      document.body.classList.add("no-select");
      if (draggableRef.current) {
        const rect = draggableRef.current.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        initX = e.clientX - rect.left;
        initY = e.clientY - rect.top;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isMouseDown && draggableRef.current) {
        let cx = e.clientX - initX;
        let cy = e.clientY - initY;
        if (cx < 0) {
          cx = 0;
        }
        if (cy < 0) {
          cy = 0;
        }
        if (window.innerWidth - e.clientX + initX < width) {
          cx = window.innerWidth - width;
        }
        if (e.clientY > window.innerHeight - height + initY) {
          cy = window.innerHeight - height;
        }
        draggableRef.current.style.left = cx + "px";
        draggableRef.current.style.top = cy + "px";
      }
    };

    const handleMouseUp = () => {
      isMouseDown = false;
      document.body.classList.remove("no-select");
    };

    if (draggableRef.current) {
      draggableRef.current.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mousemove", handleMouseMove);
      draggableRef.current.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      // Limpe os ouvintes de eventos quando o componente for desmontado
      if (draggableRef.current) {
        draggableRef.current.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mousemove", handleMouseMove);
        draggableRef.current.removeEventListener("mouseup", handleMouseUp);
      }
    };
  }, []);

  return (
    <div className="devContainer border boxShadow center" ref={draggableRef}>
      <GenericHeader title="In Development" icon={() => <BsCodeSlash />} />
      <div className="devBody flex gap-3 center">
        <AiFillWarning />
        <AiFillWarning />
        Em desenvolvimento
        <AiFillWarning />
        <AiFillWarning />
      </div>
      <div className="developmentFooter flex flex-1"></div>
    </div>
  );
}

export default Development;
