import React from "react";
import "./slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const slider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider">
      <div className="container">
        <Slider {...settings}>
        <div className="slider-box">
            <div className="box-item slider-3">
          
            </div>
         </div>
          <div className="slider-box">
            <div className="box-item slider-1">
              <div className="box-text">
                <h2
                  className="text-title animation-text__heading"
                  data-wow-delay="0.1s"
                  data-wow-duration="1500ms"
                  title="Giải pháp điện toán đám mây quản lý tối ưu cho các cơ sở tiêm chủng dịch vụ"
                >
                  Giải pháp tiêm chủng kết hợp với quản lý nhân viên, khách hàng rất thuận tiện
                </h2>
                <p
                  className="text-title-content animation-text__content"
                  data-wow-delay="0.3s"
                  data-wow-duration="1500ms"
                  title="Quản lý toàn diện quy trình TCDV tại các cơ sở tiêm, đáp ứng nhu cầu quản trị vận hành, đồng thời tăng hiệu suất kinh doanh và chăm sóc khách hàng."
                >
                  Quản lý toàn diện các thông tin khách hàng, nhân viên dễ dàng truy cập sửa đổi thông tin
                </p>
                {}
                <a
                  href="#"
                  className="btn btn-gradient animation-text__link ig-animation"
                  data-wow-delay="0.5s"
                  data-wow-duration="1500ms"
                  data-toggle="modal"
                  data-target="#myModal"
                  title="Dùng thử miễn phí"
                  tabindex="-1"
                >
                  Dùng thử miễn phí
                </a>
              </div>
              <div className="box-img">
                <img src="/image/bg-02.png" alt="" />
              </div>
            </div>
          </div>
          <div className="slider-box">
            <div className="box-item slider-2">
              <div className="box-text">
                <h2
                  className="text-title animation-text__heading"
                  data-wow-delay="0.1s"
                  data-wow-duration="1500ms"
                  title="Quản lý hiệu quả và chuỗi phòng tiêm"
                >
                  Quản lý <span className="cl-blue">hiệu quả</span> Lịch tiêm của Khách Hàng
          
                </h2>
                <p
                  className="text-title-content animation-text__content"
                  data-wow-delay="0.3s"
                  data-wow-duration="1500ms"
                  title="Quản lý toàn diện quy trình TCDV tại các cơ sở tiêm, đáp ứng nhu cầu quản trị vận hành, đồng thời tăng hiệu suất kinh doanh và chăm sóc khách hàng."
                >
                  Linh hoạt trong quản lý thông tin khách hàng và lịch tiêm chủng được sắp xếp linh hoạt, phù hợp với từng khách hàng
                </p>
                <a
                  href="#"
                  className="btn btn-gradient animation-text__link ig-animation"
                  data-wow-delay="0.5s"
                  data-wow-duration="1500ms"
                  data-toggle="modal"
                  data-target="#myModal"
                  title="Dùng thử miễn phí"
                  tabindex="-1"
                >
                  Dùng thử miễn phí
                </a>
              </div>
              <div className="box-img">
                <img src="/image/Slider-2.png" alt="" />
              </div>
            </div>
          </div>
         
          
        </Slider>
      </div>
    </div>
  );
};



export default slider;
