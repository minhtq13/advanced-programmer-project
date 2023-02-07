import QRCode from "qrcode.react";
import React from "react";
import { useSelector } from "react-redux";
import "./PayQR.scss";
import paymentIC from "../../../asset/images/ic-payment.png";
import { convertToVND } from "../../../utils/tools";

const PayQR = () => {
  const { fieldFilm, chooseChair } = useSelector((state) => state.appReducer);
  return (
    <div className="payQR-component">
      <div className="header text-bold">
        Trang chủ &gt; Đặt vé &gt;
        <span>{fieldFilm.film ? fieldFilm.film.name : ""}</span>
      </div>
      <div className="wrapper-info-pay">
        <div className="info-pay">
          <img src={paymentIC} alt="" />
          Thông tin thanh toán
        </div>
        <div className="detail">
          <div className="left">Tổng tiền: </div>
          <span>{convertToVND(chooseChair.length * 50000)}</span>
        </div>
        <div className="detail">
          <div className="left">Số tiền được giảm:</div> <span>0 VND</span>
        </div>
        <div className="detail">
          <div className="left">Số tiền cần thanh toán:</div>
          <span>{convertToVND(chooseChair.length * 50000)}</span>
        </div>
      </div>
      <div className="qr-code">
        <QRCode
          value="https://www.facebook.com/"
          id="shared-image"
          style={{ height: 300, width: 300 }}
        />
      </div>
      <div className="desc">
        <p className="expire">Expire after 10 minutes</p>
        <p className="banking">Scan the QR code with Banking App to pay</p>
      </div>
    </div>
  );
};

export default PayQR;
