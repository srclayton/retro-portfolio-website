import { useState } from "react";

function Error() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  );
}

export default Error;
