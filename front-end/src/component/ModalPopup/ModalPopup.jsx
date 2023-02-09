import { Button, Modal } from "antd";
import React, { useState } from "react";
import "./ModalPopup.scss";
import closeIconPopup from "../../asset/images/close-icon.svg";

const ModalPopup = ({
  buttonOpenModal,
  onAccept = Function,
  message,
  title,
  icon,
  confirmMessage,
  ok,

  showModalDeleteLocation = Function,
}) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    if (showModalDeleteLocation()) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const handleOk = () => {
    setLoading(true);
    onAccept();
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 200);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="button-delete-face" onClick={showModal}>
        {buttonOpenModal}
      </div>
      <Modal
        bodyStyle={{ width: "989px", height: "220px" }}
        open={open}
        ok={ok}
        title={title}
        onCancel={handleCancel}
        closeIcon={<img src={closeIconPopup} alt="" />}
        className="modal-popup-component"
        footer={[
          <Button
            key="back"
            onClick={handleCancel}
            style={{
              background: "#F5F8FA",
              borderRadius: "6px",
              height: "44px",
              outline: "none",
              border: "none",
            }}
          >
            Cancel
          </Button>,
          <Button
            style={{
              borderRadius: "6px",
              height: "44px",
              marginRight: "12px",
            }}
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            {ok}
          </Button>,
        ]}
      >
        <div className="modal-popup-content">
          <img src={icon} alt="" />
          <p
            className="text-bold"
            style={{
              marginTop: "24px",
              marginBottom: "8px",
              fontSize: "24px",
            }}
          >
            {message}
          </p>
          <h4 style={{ marginTop: "10px" }}>{confirmMessage}</h4>
        </div>
      </Modal>
    </>
  );
};

export default ModalPopup;
