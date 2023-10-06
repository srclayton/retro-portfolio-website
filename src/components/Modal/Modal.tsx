import React, { ReactNode, useEffect } from "react";
import "./Modal.css";
interface IModalProps {
  isOpen: boolean;
  children: ReactNode;
  large?: boolean | undefined;
  onClose: () => void;
}

const Modal: React.FC<IModalProps> = ({ isOpen, children, large, onClose }) => {
  if (!isOpen) return null;
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose?.();
      window.removeEventListener("keydown", handleKeyPress);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
  }, []);
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
