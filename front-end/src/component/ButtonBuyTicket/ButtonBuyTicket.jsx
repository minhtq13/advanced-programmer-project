import { Button, Modal } from "antd";
import React, { useState } from "react";
import "./ButtonBuyTicket.scss";
import { useNavigate } from "react-router-dom";

const ButtonBuyTicket = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    navigate("/movie-chair");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="wrapper-button-buy-ticket">
      <Button type="primary" onClick={showModal} className="button-buy-ticket">
        Mua vé
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default ButtonBuyTicket;
