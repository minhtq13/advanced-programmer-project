import { Modal } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonConfirm from "../ButtonConfirm/ButtonConfirm";
import "./TimeItem.scss";

const TimeItem = ({
  timeItem,
  emptyChair,
  nameFilm,
  date,
  onAccpet = Function,
}) => {
  // const infoMovieChair = { timeItem, emptyChair, nameFilm, date };

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
    onAccpet();
    navigate("/movie-chair");
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="wrapper-time-item" onClick={showModal}>
      <div className="time-item">{timeItem}</div>
      <div className="empty-chair">{emptyChair} ghế trống</div>
      <Modal
        className="modal-time-item"
        title="BẠN ĐANG ĐẶT VÉ XEM PHIM"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        width={"40vw"}
        footer={[
          <ButtonConfirm handleClickConfirm={handleOk} buttonName="ĐỒNG Ý" />,
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
            <div className="info-film-item">Beta Thanh Xuân</div>
            <div className="info-film-item">{date}</div>
            <div className="info-film-item">{timeItem}</div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TimeItem;
