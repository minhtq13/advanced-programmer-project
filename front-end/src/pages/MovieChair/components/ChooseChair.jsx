import React, { useState } from "react";
import "./ChooseChair.scss";
import { useDispatch } from "react-redux";
import { setChooseChair } from "../../../redux/slices/appSlice";
import icScreen from "../../../asset/images/ic-screen.png";
import GheDaBan from "../../../asset/images/seat-buy-normal.png";
import GheDangDuocGiu from "../../../asset/images/seat-process-normal.png";
import GheDangChon from "../../../asset/images/seat-select-normal.png";
import GheDatTruoc from "../../../asset/images/seat-set-normal.png";
import GheTrong from "../../../asset/images/seat-unselect-normal.png";
import GheVIP from "../../../asset/images/seat-unselect-vip.png";
import { useSelector } from "react-redux";
import { convertToVND } from "../../../utils/tools";

const dataTypeOfChair = [
  {
    id: 1,
    img: GheTrong,
    text: "Ghế trống",
  },
  {
    id: 2,
    img: GheDangChon,
    text: "Ghế đang chọn",
  },
  {
    id: 3,
    img: GheDangDuocGiu,
    text: "Ghế đang được giữ",
  },
  {
    id: 4,
    img: GheDaBan,
    text: "Ghế đã bán",
  },
  {
    id: 5,
    img: GheDatTruoc,
    text: "Ghế đặt trước",
  },
];

const listChairs = [];
for (let i = 0; i < 153; i++) {
  listChairs.push({
    id: i,
    value: `G${i}`,
    img: i < 102 ? GheTrong : GheVIP,
    imgclicked: GheDangChon,
  });
}
let listChairsClicked = [];

const ChooseChair = () => {
  const { fieldFilm } = useSelector((state) => state.appReducer);
  const [clicked, setClicked] = useState(false);
  const handleClick = (item) => {
    setClicked(!clicked);
    if (listChairsClicked.length > 0 && listChairsClicked.includes(item)) {
      listChairsClicked = listChairsClicked.filter((obj) => obj.id !== item.id);
      dispatch(setChooseChair(listChairsClicked));
    } else {
      listChairsClicked.push(item);
      dispatch(setChooseChair(listChairsClicked));
    }
  };
  const dispatch = useDispatch();

  return (
    <div className="wrapper-choose-chair">
      <div className="header text-bold">
        Trang chủ &gt; Đặt vé &gt;
        <span>{fieldFilm.film ? fieldFilm.film.name : ""}</span>
      </div>
      <div className="type-of-chair">
        {dataTypeOfChair?.map((chair, index) => {
          return (
            <div className="seat-item" key={index}>
              <img src={chair.img} alt="" />
              <div className="seat-status-text">{chair.text}</div>
            </div>
          );
        })}
      </div>
      <div className="screen">
        <div className="ic-screen">
          <img src={icScreen} alt="" />
        </div>
        <div className="check-show">
          {listChairs?.map((listChair, index) => (
            <React.Fragment key={index}>
              <div
                className="seat-item"
                onClick={() => handleClick(listChair)}
                key={listChair.id}
              >
                {/* <div className="value-chair">{listChair.value}</div> */}
                {listChairsClicked.length > 0 &&
                listChairsClicked.includes(listChair) ? (
                  <div>
                    <div
                      className="value-chair text-bold"
                      style={{ color: "white" }}
                    >
                      {listChair.value}
                    </div>
                    <img
                      src={listChair.imgclicked}
                      alt=""
                      className="img-ghe-trong"
                    />
                  </div>
                ) : (
                  <div>
                    <div className="value-chair text-bold">
                      {listChair.value}
                    </div>
                    <img src={listChair.img} alt="" className="img-ghe-trong" />
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="footer-seat">
        <div className="seat-unselect normal">
          <div className="seat-unselect-item">
            <img src={GheTrong} alt="" />
            <div className="text-bold">Ghế thường</div>
          </div>
          <div className="money">
            {listChairsClicked.length > 0
              ? `${listChairsClicked.length}x${convertToVND(50000)}`
              : ""}
          </div>
        </div>
        <div className="seat-unselect vip">
          <div className="seat-unselect-item">
            <img src={GheVIP} alt="" />
            <div className="text-bold">Ghế VIP</div>
          </div>
          <div className="money">
            {listChairsClicked.length > 0
              ? `${listChairsClicked.length}x${convertToVND(50000)}`
              : ""}
          </div>
        </div>
        <div className="total-money">
          <h2>TỔNG TIỀN</h2>
          <span>
            {listChairsClicked.length > 0
              ? `${convertToVND(listChairsClicked.length * 50000)}`
              : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChooseChair;
