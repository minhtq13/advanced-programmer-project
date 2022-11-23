import React from "react";
import Movie from "../Movie";
import "./homepage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OPBanner from "../../asset/images/OPBanner.jpg";
import MuRomBanner from "../../asset/images/murombanner.png";
import HPMBanner from "../../asset/images/HPMBanner.jpg";

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
                <div id="promotion" class="promotion">
                    <div className="container-test col-16">
                        <Slider {...settings}>
                            <div className="promotion-box">
                                <div class="promotion__review-box">
                                    <div class="box-item">
                                        <img
                                            class="box-item-img"
                                            src={OPBanner}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="promotion-box">
                                <div class="promotion__review-box">
                                    <div class="box-item">
                                        <img
                                            class="box-item-img"
                                            src={MuRomBanner}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="promotion-box">
                                <div class="promotion__review-box">
                                    <div class="box-item">
                                        <img
                                            class="box-item-img"
                                            src={HPMBanner}
                                            alt=""
                                        />
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
