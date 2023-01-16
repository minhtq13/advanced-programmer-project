import { ClockCircleOutlined, TagsOutlined } from "@ant-design/icons";
import React from "react";
import { useDispatch } from "react-redux";
import AvatarFilm from "../../../component/AvatarFilm/AvatarFilm";
import TimeItem from "../../../component/TimeItem/TimeItem";
import {
  setFieldFilm,
  setTimeItemInMovieChair,
} from "../../../redux/slices/appSlice";
import "./ContentDay.scss";

const ContentDay = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className="movie-schedule">
      {data?.map((film, index) => {
        const convertTime = film.time.split(",");
        return (
          <div className="movie-item-schedule col-6" key={index}>
            <div style={{ marginRight: "12px" }}>
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
                  <ClockCircleOutlined /> {film.film.duration} phút
                </div>
              </div>
              <div className="desc">
                <div className="animation">{film.animation} Phụ Đề</div>
                <div className="wrapper-list-time">
                  {convertTime.map((timeItem, index) => {
                    return (
                      <div className="list-time" key={index}>
                        <TimeItem
                          onAccpet={() => {
                            dispatch(setFieldFilm(film));
                            dispatch(setTimeItemInMovieChair(timeItem));
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
        );
      })}
    </div>
  );
};

export default ContentDay;
