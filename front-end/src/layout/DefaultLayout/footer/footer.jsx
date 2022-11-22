/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.scss";
import Phone from "../../../asset/images/phone.png";
import logoBeta from "../../../asset/images/logoBeta.png";

const footer = () => {
  return (
    <div>
      <div>
        <footer className="footer" style={{ marginTop: "60px" }}>
          <div className="grid">
            <div className="grid__row">
              <div className="grid__column-footer">
                <div className="logo-web">
                  <img src={logoBeta} alt="" />
                </div>
                <ul className="list-options">
                  <li className="footer-item">Tuyển dụng</li>
                  <li className="footer-item">Giới thiệu</li>
                  <li className="footer-item">Liên hệ</li>
                  <li className="footer-item">F.A.Q</li>
                  <li className="footer-item">Hoạt động xã hội</li>
                  <li className="footer-item">Điều khoản sử dụng</li>
                  <li className="footer-item">
                    Chính sách thanh toán, đổi trả - hoàn vé
                  </li>
                  <li className="footer-item">Liên hệ quảng cáo</li>
                  <li className="footer-item">Điều khoản bảo mật</li>
                  <li className="footer-item">Hướng dẫn đặt vé online</li>
                </ul>
              </div>
              <div className="grid__column-footer">
                <div className="footer__heading">CỤM RẠP BETA</div>
                <div className="line"></div>
                <ul className="footer-list">
                  <li className="footer-item">
                    Beta Cinemas Thanh Xuân, Hà Nội
                  </li>
                  <li className="footer-item">
                    Beta Cinemas Giải phóng, Hà Nội
                  </li>
                  <li className="footer-item">
                    Beta Cinemas Giải phóng, Hà Nội
                  </li>
                  <li className="footer-item">
                    Beta Cinemas Giải phóng, Hà Nội
                  </li>
                  <li className="footer-item">
                    Beta Cinemas Giải phóng, Hà Nội
                  </li>
                  <li className="footer-item">
                    Beta Cinemas Giải phóng, Hà Nội
                  </li>
                  <li className="footer-item">
                    Beta Cinemas Giải phóng, Hà Nội
                  </li>
                  <li className="footer-item">
                    Beta Cinemas Giải phóng, Hà Nội
                  </li>
                </ul>
              </div>
              <div className="grid__column-footer" style={{ width: "15%" }}>
                <div className="footer__heading">THEO DÕI</div>
                <div className="line1"></div>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href="" className="footer-item__link">
                      <i className="footer-item__icon fab fa-facebook"></i>
                      Facebook
                    </a>
                  </li>
                  <li className="footer-item">
                    <a href="" className="footer-item__link">
                      <i className="footer-item__icon fab fa-instagram"></i>
                      Instagram
                    </a>
                  </li>
                  <li className="footer-item">
                    <a href="" className="footer-item__link">
                      <i className="footer-item__icon fab fa-linkedin-in"></i>
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
              <div className="grid__column-footer" style={{ width: "20%" }}>
                <div className="footer__heading">LIÊN HỆ</div>
                <div className="line2"></div>
                <div className="detail">
                  <h3 className="title" style={{ fontSize: "18px" }}>
                    CÔNG TY CỔ PHẦN BETA MEDIA
                  </h3>
                  <p>
                    Giấy chứng nhận ĐKKD số: 0106633482 - Đăng ký lần đầu ngày
                    08/09/2014 tại Sở Kế hoạch và Đầu tư Thành phố Hà Nội
                  </p>
                  <p>
                    Địa chỉ trụ sở: Tầng 3, số 595, đường Giải Phóng, phường
                    Giáp Bát, quận Hoàng Mai, thành phố Hà Nội
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
                    <span className="text-hotline">099 999 999</span>
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
