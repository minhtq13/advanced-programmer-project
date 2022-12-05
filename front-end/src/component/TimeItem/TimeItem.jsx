import { Button, Modal } from "antd";
import React, { useState } from "react";
import "./TimeItem.scss";
import { useSelector } from "react-redux";

const TimeItem = ({ timeItem, emptyChair, nameFilm }) => {
  const { dateMovie } = useSelector((state) => state.appReducer);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 2000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div className="wrapper-time-item" onClick={showModal}>
      <div className="time-item">{timeItem}</div>
      <Modal
        className="modal-time-item"
        title="BẠN ĐANG ĐẶT VÉ XEM PHIM"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        width={"40vw"}
        footer={[
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            ĐỒNG Ý
          </Button>,
        ]}
      >
        <div className="content-modal">
          <div className="name-film">{nameFilm}</div>
          <div className="tabs">
            <div className="tabs-item">Rạp chiếu</div>
            <div className="tabs-item">Ngày chiếu</div>
            <div className="tabs-item">Giờ chiếu</div>
          </div>
          <div className="info-film">
            <div className="info-film-item">Beta Bắc Giang</div>
            <div className="info-film-item">{dateMovie}</div>
            <div className="info-film-item">{timeItem}</div>
          </div>
        </div>
      </Modal>
      <div className="empty-chair">{emptyChair} ghế trống</div>
    </div>
  );
};

export default TimeItem;
