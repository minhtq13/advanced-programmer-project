import { ClockCircleOutlined, TagsOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useState } from "react";
import AvatarFilm from "../../../component/AvatarFilm/AvatarFilm";
import TimeItem from "../../../component/TimeItem/TimeItem";
import useFilm from "../../../hooks/useFilm";
import "./ContentDay.scss";
const ContentDay = ({ data, date }) => {
  const { infoFilmByNameFilm, getInfoFilmByNameFilm, listFilm } = useFilm();

  let list;
  useEffect(() => {
    getInfoFilmByNameFilm(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  console.log(listFilm);

  return (
    <div className="movie-schedule">
      {/* {data?.map((film, index) => {
        return (
          <div className="movie-item-schedule col-6" key={index}>
            <div style={{ marginRight: "12px" }}>
              <AvatarFilm
                image={film.img}
                width={248}
                height={392}
                borderRadius={20}
              />
            </div>
            <div className="detail">
              <div className="film-name">{film.title}</div>
              <div className="tag-time">
                <div className="tag-film">
                  <TagsOutlined />
                  {film.tag}
                </div>
                <div className="time-film">
                  <ClockCircleOutlined /> {film.duration} phút
                </div>
              </div>
              <div className="desc">
                <div className="animation">{film.animation}</div>
                <div className="wrapper-list-time">
                  {film.children.map((time, index) => {
                    return (
                      <div className="list-time" key={index}>
                        <TimeItem
                          // date={data.title}
                          nameFilm={film.title}
                          timeItem={time.time}
                          emptyChair={time.emptyChair}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })} */}
    </div>
  );
};

export default ContentDay;
