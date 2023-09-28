import React, { ReactNode } from "react";
import "./Modal.css";
interface IModalProps {
  isOpen: boolean;
  children: ReactNode;
}

const Modal: React.FC<IModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
