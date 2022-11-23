import { Button } from "antd";
import React from "react";
import "./Menu.scss";

const Menu = ({ items }) => {
    return (
        <div className="wrapper-movie-item">
            {items.map((item) => {
                const { id, title, img, vibe, time, date } = item;
                return (
                    <div className="movie-item" key={id}>
                        <img src={img} alt="" className="movie-img" />
                        <div className="info-movie">
                            <div className="title-movie">{title}</div>
                            <div className="desc-movie">
                                <div className="vibe-movie detail">
                                    <div className="options">Thể loại : </div>
                                    <div className="info-vive">{vibe}</div>
                                </div>
                                <div className="time-movie detail">
                                    <div className="options">Thời lượng :</div>
                                    <div className="info-time">{time}</div>
                                </div>
                                <div className="date-movie detail">
                                    <div className="options">
                                        Ngày khởi chiếu :{" "}
                                    </div>
                                    <div className="info-date">{date}</div>
                                </div>
                            </div>
                        </div>
                        <div className="buy-ticket">
                            <Button className="button-buy-ticket">
                                Mua vé
                            </Button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Menu;
