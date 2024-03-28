import GenericHeader from "../Generics/GenericHeader";
import Modal from "../Modal/Modal";
import "./Apps.css";
import { IconType } from "react-icons";
import React, { useState } from "react";

interface IAppsProps {
  name: string;
  icon: IconType;
  hero: JSX.Element;
  large?: boolean | undefined;
  auto?: boolean | undefined;
  isHref?: boolean | undefined;
}

function Apps(props: IAppsProps) {
  const { name, icon: Icon, hero, large, isHref, auto } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div
        onClick={isHref ? () => null : openModal}
        className="appContainer flex center"
      >
        <div className="appImage flex center">
          <Icon />
        </div>
        <div className="appName">{name}</div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        large={large}
        auto={auto}
      >
        <div className="border boxShadow">
          <GenericHeader title={name} onClose={closeModal} />
          {React.cloneElement(hero, { onClose: closeModal })}
        </div>
      </Modal>
    </>
  );
}

export default Apps;
