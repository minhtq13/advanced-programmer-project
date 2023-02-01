import React from "react";
import { useDispatch } from "react-redux";
import {
    setFieldFilm,
    setTimeItemInMovieChair,
} from "../../../../redux/slices/appSlice";
import "./OptionsDay.scss";
import TimeItem from "../../../TimeItem/TimeItem";
import AvatarFilm from "../../../AvatarFilm/AvatarFilm";
import { ClockCircleOutlined, TagsOutlined } from "@ant-design/icons";
import noFilms from "../../../../asset/images/no-films-icon.png";

const OptionsDay = ({ film }) => {
    const dispatch = useDispatch();
    const convertTime = film?.time.split(",");

    return (
        <div>
            {film ? (
                <div className="movie-schedule">
                    <div className="movie-item-schedule">
                        <div style={{ marginRight: "24px" }}>
                            <AvatarFilm
                                image={film.film.img}
                                width={248}
                                height={392}
                                borderRadius={20}
                            />
                        </div>
                        <div className="detail">
                            <div className="film-name">{film.film.name}</div>
                            <div className="tag-time">
                                <div className="tag-film">
                                    <TagsOutlined />
                                    {film.film.category}
                                </div>
                                <div className="time-film">
                                    <ClockCircleOutlined /> {film.film.duration}{" "}
                                    phút
                                </div>
                            </div>
                            <div className="desc">
                                <div className="animation">
                                    {film.animation} Phụ Đề
                                </div>
                                <div className="wrapper-list-time">
                                    {convertTime.map((timeItem, index) => {
                                        return (
                                            <div
                                                className="list-time"
                                                key={index}
                                            >
                                                <TimeItem
                                                    onAccpet={() => {
                                                        dispatch(
                                                            setFieldFilm(film)
                                                        );
                                                        dispatch(
                                                            setTimeItemInMovieChair(
                                                                timeItem
                                                            )
                                                        );
                                                    }}
                                                    date={film.day}
                                                    nameFilm={film.film.name}
                                                    timeItem={timeItem}
                                                    emptyChair={film.soldOut}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="no-schedule-film">
                    <p>Không có lịch chiếu trong ngày này</p>
                    <img src={noFilms} alt="" />
                </div>
            )}
        </div>
    );
};

export default OptionsDay;
