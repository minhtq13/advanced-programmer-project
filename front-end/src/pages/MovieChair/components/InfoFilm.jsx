import React from "react";
import "./InfoFilm.scss";
import OPFlim from "../../../asset/images/cinemas-OP.jpg";
import {
  ClockCircleOutlined,
  TagsOutlined,
  FieldTimeOutlined,
  FundProjectionScreenOutlined,
  ScheduleOutlined,
  MenuUnfoldOutlined,
  PicCenterOutlined,
} from "@ant-design/icons";
import ButtonConfirm from "../../../component/ButtonConfirm/ButtonConfirm";
import { useSelector } from "react-redux";
import AvatarFilm from "../../../component/AvatarFilm/AvatarFilm";

const InfoFilm = () => {
  const { chooseChair } = useSelector((state) => state.appReducer);
  // handle click OK
  const handleOk = () => {};
  return (
    <div className="wrapper-info-film">
      <div className="row1">
        <AvatarFilm image={OPFlim} width={150} height={237} />
        <div className="name-animation">
          <div className="name">One Piece Film: Red</div>
          <div className="animation">2D Phụ đề</div>
        </div>
      </div>
      <div className="row2">
        <div className="wrapper-item">
          <div className="info">
            <TagsOutlined /> Thể loại
          </div>
          <div className="detail">Hoạt hình, Hành động</div>
        </div>
        <div className="wrapper-item">
          <div className="info">
            <ClockCircleOutlined /> Thời lượng
          </div>
          <div className="detail">115 phút</div>
        </div>
      </div>
      <div className="row3">
        <div className="wrapper-item">
          <div className="info">
            <MenuUnfoldOutlined /> Rạp chiếu
          </div>
          <div className="detail">Beta Thanh Xuân</div>
        </div>
        <div className="wrapper-item">
          <div className="info">
            <ScheduleOutlined /> Ngày chiếu
          </div>
          <div className="detail">06/12/2022</div>
        </div>
        <div className="wrapper-item">
          <div className="info">
            <FieldTimeOutlined /> Giờ chiếu
          </div>
          <div className="detail">10:30</div>
        </div>
        <div className="wrapper-item">
          <div className="info">
            <FundProjectionScreenOutlined /> Phòng chiếu
          </div>
          <div className="detail">P2</div>
        </div>
        <div className="wrapper-item">
          <div className="info">
            <PicCenterOutlined /> Ghế ngồi
          </div>
          <div style={{ display: "flex" }} className="detail">
            {chooseChair?.map((chair, index) => (
              <div className="chair-name" key={index}>
                {chair.value}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="button-confirm-component">
        <ButtonConfirm handleClickConfirm={handleOk} buttonName="TIẾP TỤC" />
      </div>
    </div>
  );
};

export default InfoFilm;
