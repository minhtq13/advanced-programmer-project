import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import AvatarBanner from "../../asset/images/film-avatar-banner.jpg";
import MuRomBanner from "../../asset/images/murombanner.png";
import OPBanner from "../../asset/images/OPBanner.jpg";
import Movie from "../Movie";
import "./Home.scss";

export default function Homepage() {
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
    <div className="home-page">
      <div className="banner1">
        <div id="promotion" className="promotion">
          <div className="container1">
            <Slider {...settings}>
              <div className="promotion-box">
                <div className="promotion__review-box">
                  <div className="box-item">
                    <img className="box-item-img" src={OPBanner} alt="" />
                  </div>
                </div>
              </div>
              <div className="promotion-box">
                <div className="promotion__review-box">
                  <div className="box-item">
                    <img className="box-item-img" src={MuRomBanner} alt="" />
                  </div>
                </div>
              </div>

              <div className="promotion-box">
                <div className="promotion__review-box">
                  <div className="box-item">
                    <img className="box-item-img" src={AvatarBanner} alt="" />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="movie-component">
        <Movie />
      </div>
    </div>
  );
}
