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
                            <div className="vibe-movie detail">
                                <h3>Thể loại : </h3>
                                <div className="info-vive">{vibe}</div>
                            </div>
                            <div className="time-movie detail">
                                <h3>Thời lượng :</h3>
                                <div className="info-time">{time}</div>
                            </div>
                            <div className="date-movie detail">
                                <h3>Ngày khởi chiếu : </h3>
                                <div className="info-date">{date}</div>
                            </div>
                        </div>
                        <div className="buy-ticket">
                            <button className="button-buy-ticket">
                                Mua vé
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Menu;
