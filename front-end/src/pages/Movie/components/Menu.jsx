import React from "react";
import "./Menu.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDetailFilm } from "../../../redux/slices/appSlice";
import AvatarFilm from "../../../component/AvatarFilm/AvatarFilm";
import ButtonBuyTicket from "../../../component/ButtonBuyTicket/ButtonBuyTicket";
import noFilmIcon from "../../../asset/images/no-films-icon.png";

const Menu = ({ items }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="wrapper-movie-item">
            {items.length !== 0 ? (
                items.map((item, index) => {
                    const { name, img, category, duration, premiereDate } =
                        item;
                    return (
                        <div className="movie-item" key={index}>
                            <div>
                                <AvatarFilm
                                    image={img}
                                    width={227.5}
                                    height={360}
                                    borderRadius={12}
                                />
                            </div>
                            <div className="info-movie">
                                <div className="title-movie">
                                    <div
                                        onClick={() => {
                                            navigate("/detail-film");
                                            dispatch(setDetailFilm(item));
                                        }}
                                    >
                                        {name}
                                    </div>
                                </div>
                                <div className="desc-movie">
                                    <div className="vibe-movie detail">
                                        <div className="options">
                                            Thể loại :
                                        </div>
                                        <div className="info-vive">
                                            {category}
                                        </div>
                                    </div>
                                    <div className="time-movie detail">
                                        <div className="options">
                                            Thời lượng :
                                        </div>
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
                            <div
                                className="buy-ticket"
                                onClick={() => {
                                    dispatch(setDetailFilm(item));
                                }}
                            >
                                <ButtonBuyTicket />
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className="film-not-data">
                    <img src={noFilmIcon} alt="" />
                    <span>No Films</span>
                </div>
            )}
        </div>
    );
};

export default Menu;
