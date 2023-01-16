import { ClockCircleOutlined, TagsOutlined } from "@ant-design/icons";
import React from "react";
import { useDispatch } from "react-redux";
import {
  setFieldFilm,
  setTimeItemInMovieChair,
} from "../../../../redux/slices/appSlice";
import TimeItem from "../../../TimeItem/TimeItem";

import "./OptionsDay.scss";

const OptionsDay = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className="movie-schedule">
      {data?.map((film, index) => {
        const convertTime = film.time.split(",");
        return (
          <div className="movie-item-schedule col-6" key={index}>
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

export default OptionsDay;
