import React, { ReactNode } from "react";
import "./Modal.css";
interface IModalProps {
  isOpen: boolean;
  children: ReactNode;
  large?: boolean | undefined;
}

const Modal: React.FC<IModalProps> = ({ isOpen, children, large }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay modal-enter">
      <div className="modal">
        {large ? (
          <div className="modal-content-95">{children}</div>
        ) : (
          <div className="modal-content">{children}</div>
        )}
      </div>
    </div>
  );
};

export default Modal;
