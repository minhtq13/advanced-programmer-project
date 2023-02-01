import QRCode from "qrcode.react";
import React from "react";
import { useSelector } from "react-redux";
import "./PayQR.scss";

const PayQR = () => {
    const { fieldFilm } = useSelector((state) => state.appReducer);
    return (
        <div className="payQR-component">
            <div className="header text-bold">
                Trang chủ &gt; Đặt vé &gt; <span>{fieldFilm?.film.name}</span>
            </div>
            <div className="qr-code">
                <QRCode
                    value="https://www.facebook.com/"
                    id="shared-image"
                    style={{ height: 300, width: 300 }}
                />
            </div>
        </div>
    );
};

export default PayQR;
