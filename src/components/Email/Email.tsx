import GenericHeader from "../Generics/GenericHeader";
import "./Email.css";
import "../../index.css";
import Form from "./Form";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { AiFillMail, AiOutlineCloseSquare } from "react-icons/ai";
import Apps from "../Apps/Apps";
function Email() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Apps
        onClick={openModal}
        icon={() => <AiFillMail color="#2c80b7" className="appImageIcon" />}
        name="Email"
      />
      <Modal isOpen={isModalOpen}>
        <div className="border boxShadow">
          <GenericHeader
            title="EMAIL"
            onClose={closeModal}
            icon={AiOutlineCloseSquare}
          />
          <Form />
        </div>
      </Modal>
    </>
  );
}

export default Email;
