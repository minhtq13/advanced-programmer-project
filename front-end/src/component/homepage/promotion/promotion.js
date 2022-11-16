import React from "react";
import "./promotion.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const promotion = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div id="promotion" class="promotion ">
        <div className="container">
          <Slider {...settings}>
            <div className="promotion-box">
              <div class="promotion__review-box">
                <div class="box-item">
                  <img class="box-item-img" src="/image/slider-1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="promotion-box">
              <div class="promotion__review-box">
                <div class="box-item">
                  <img class="box-item-img" src="/image/slider-2.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="promotion-box">
              <div class="promotion__review-box">
                <div class="box-item">
                  <img class="box-item-img" src="/image/slider-3.jpg" alt="" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default promotion;
