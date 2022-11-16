import React from "react";
import "./footer.css";
import Phone from "../../../asset/images/phone.png";

const footer = () => {
  const hidden = () => {
    const check = window.scrollTo;
    console.log(check);
  };
  hidden();
  return (
    <div>
      <footer class="footer">
        <div class="grid">
          <div class="grid__row">
            <div class="grid__column-footer">
              <h3 class="footer__heading">Giới thiệu</h3>
              <span class="footer-item">
                Phần mềm Quản lý phòng Tiêm chủng dịch vụ BKVacine quản lý tổng
                thể, toàn diện quy trình tiêm chủng dịch vụ tại các cơ sở tiêm,
                đáp ứng nhu cầu quản trị vận hành, đồng thời tăng hiệu suất kinh
                doanh và chăm sóc khách hàng tại cơ sở.
              </span>
            </div>
            <div class="grid__column-footer">
              <h3 class="footer__heading">Liên kết</h3>
              <ul class="footer-list">
                <li class="footer-item">
                  <a href="" class="footer-item__link">
                    Điều khoản bảo mật
                  </a>
                </li>
                <li class="footer-item">
                  <a href="" class="footer-item__link">
                    Chính sách bảo hành
                  </a>
                </li>
                <li class="footer-item">
                  <a href="" class="footer-item__link">
                    Hình thức thanh toán
                  </a>
                </li>
              </ul>
            </div>
            <div class="grid__column-footer">
              <h3 class="footer__heading">Theo dõi</h3>
              <ul class="footer-list">
                <li class="footer-item">
                  <a href="" class="footer-item__link">
                    <i class="footer-item__icon fab fa-facebook"></i>
                    Facebook
                  </a>
                </li>
                <li class="footer-item">
                  <a href="" class="footer-item__link">
                    <i class="footer-item__icon fab fa-instagram"></i>
                    Instagram
                  </a>
                </li>
                <li class="footer-item">
                  <a href="" class="footer-item__link">
                    <i class="footer-item__icon fab fa-linkedin-in"></i>
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <div class="grid__column-footer">
              <h3 class="footer__heading">Liên hệ</h3>
              <ul class="footer-list">
                <li class="footer-item">
                  <a href="" class="footer-item__link">
                    TRẠM Y TẾ BÁCH KHOA - BACH KHOA CLINICS
                  </a>
                </li>
                <li class="footer-item">
                  <a href="" class="footer-item__link">
                    GPKD: 0109143493 – cấp ngày 25/3/2020
                  </a>
                </li>
                <li class="footer-item">
                  <a href="" class="footer-item__link">
                    <i class="footer-item__icon fas fa-map-marker-alt"></i>
                    Tạ Quang Bửu, Bách Khoa, Hai Bà Trưng, Hà Nội
                  </a>
                </li>
                <li class="footer-item">
                  <a href="" class="footer-item__link">
                    <i class="footer-item__icon fas fa-phone"></i>
                    0936341920
                  </a>
                </li>
                <li class="footer-item">
                  <a href="" class="footer-item__link">
                    <i class="footer-item__icon far fa-envelope"></i>
                    bk-chich@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__call">
            <div className="hotline-phone">
              <div class="hotline-phone-circle">
                <span href="tel:0986 005 720">
                  <img
                    className="hotline-rung"
                    src={Phone}
                    alt="Số điện thoại"
                    width="50"
                  />
                </span>
                <div class="hotline-bar ">
                  <span class="text-hotline">099 999 999</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default footer;
