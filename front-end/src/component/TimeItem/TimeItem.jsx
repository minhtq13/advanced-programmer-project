import { Modal } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonConfirm from "../ButtonConfirm/ButtonConfirm";
import "./TimeItem.scss";

const TimeItem = ({ timeItem, emptyChair, nameFilm }) => {
  const navigate = useNavigate();
  const { dateMovie } = useSelector((state) => state.appReducer);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
    navigate("/movie-chair");
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
