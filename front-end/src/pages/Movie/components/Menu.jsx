import React from "react";
import AvatarFilm from "../../../component/AvatarFilm/AvatarFilm";
import ButtonBuyTicket from "../../../component/ButtonBuyTicket/ButtonBuyTicket";
import "./Menu.scss";

const Menu = ({ items }) => {
    return (
        <div className="wrapper-movie-item">
            {items.map((item) => {
                const { id, name, img, category, duration, premiereDate } =
                    item;
                return (
                    <div className="movie-item" key={id}>
                        <AvatarFilm
                            image={`${img}`}
                            width={227.5}
                            height={360}
                            borderRadius={12}
                        />
                        <div className="info-movie">
                            <div className="title-movie">
                                <div>{name}</div>
                            </div>
                            <div className="desc-movie">
                                <div className="vibe-movie detail">
                                    <div className="options">Thể loại : </div>
                                    <div className="info-vive">{category}</div>
                                </div>
                                <div className="time-movie detail">
                                    <div className="options">Thời lượng :</div>
                                    <div className="info-time">
                                        {duration} phút
                                    </div>
                                </div>
                                <div className="date-movie detail">
                                    <div className="options">
                                        Ngày khởi chiếu :
                                    </div>
                                    <div className="info-date">
                                        {premiereDate}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="buy-ticket">
                            <ButtonBuyTicket />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Menu;
