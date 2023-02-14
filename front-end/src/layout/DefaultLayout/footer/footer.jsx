/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.scss";
import { RightOutlined } from "@ant-design/icons";
import { dataColumn1, dataColumn2, dataColumn3 } from "./data";
import Phone from "../../../asset/images/phone.png";
import logoBeta from "../../../asset/images/logoBeta.png";
import DaThongBao from "../../../asset/images/dathongbao.png";

const footer = () => {
  return (
    <div>
      <div>
        <footer className="footer">
          <div className="grid" style={{ width: "1150px" }}>
            <div className="grid__row">
              <div className="grid__column-footer">
                <div className="logo-web" style={{ marginBottom: "10px" }}>
                  <img src={logoBeta} alt="" />
                </div>
                <ul className="list-options">
                  {dataColumn1.map((data, index) => {
                    return (
                      <div className="column-options" key={index}>
                        <RightOutlined />
                        <li className="footer-item">{data.title}</li>
                      </div>
                    );
                  })}
                </ul>
              </div>
              <div className="grid__column-footer">
                <div className="footer__heading1">CỤM RẠP BETA</div>
                <ul className="footer-list">
                  {dataColumn2.map((data, index) => {
                    return (
                      <div className="column-options" key={index}>
                        <RightOutlined />
                        <li className="footer-item">{data.title}</li>
                      </div>
                    );
                  })}
                </ul>
              </div>
              <div className="grid__column-footer ">
                <div className="footer__heading2">THEO DÕI</div>
                <ul className="footer-list">
                  {dataColumn3.map((data, index) => {
                    return (
                      <li className="footer-item" key={index}>
                        <div className="icon-and-title">
                          <div className="icon">{data.icon}</div>
                          <div className="title">{data.title}</div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <img
                  style={{ height: "68px", width: "180px" }}
                  src={DaThongBao}
                  alt=""
                />
              </div>
              <div className="grid__column-footer">
                <div className="footer__heading3">LIÊN HỆ</div>
                <div className="detail">
                  <h3 className="title" style={{ fontSize: "18px" }}>
                    CÔNG TY CỔ PHẦN BETA MEDIA
                  </h3>
                  <p>
                    Giấy chứng nhận ĐKKD số: 0106633482 - Đăng ký lần đầu ngày
                    08/09/2014 tại Sở Kế hoạch và Đầu tư Thành phố Hà Nội
                  </p>
                  <p>
                    Địa chỉ trụ sở: Số 1 Đại Cồ Việt, quận Hai Bà Trưng, thành
                    phố Hà Nội
                  </p>
                  <div style={{ fontStyle: "italic" }}>
                    Hotline: 0934 632 682
                  </div>
                  <div style={{ fontStyle: "italic" }}>
                    Email: cskh@betacorp.vn
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      marginTop: "16px",
                    }}
                  >
                    Liên hệ hợp tác kinh doanh:
                  </div>
                  <h3>minh@betacorp.vn</h3>
                </div>
              </div>
            </div>
            <div className="footer__call">
              <div className="hotline-phone">
                <div className="hotline-phone-circle">
                  <span href="tel:0986 005 720">
                    <img
                      className="hotline-rung"
                      src={Phone}
                      alt="Số điện thoại"
                      width="50"
                    />
                  </span>
                  <div className="hotline-bar">
                    <span className="text-hotline">0979 047 751</span>
                  </div>
                </div>
                <div className="wrapper-phone"></div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default footer;
