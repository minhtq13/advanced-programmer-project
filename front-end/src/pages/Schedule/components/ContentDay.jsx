import { ClockCircleOutlined, TagsOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import AvatarFilm from "../../../component/AvatarFilm/AvatarFilm";
import TimeItem from "../../../component/TimeItem/TimeItem";
import useSchedule from "../../../hooks/useSchedule";
import "./ContentDay.scss";
const ContentDay = ({ data }) => {
  const { infoSchedule, getInfoSchedule } = useSchedule();

  useEffect(() => {
    if (infoSchedule) {
      getInfoSchedule({
        nameCinema: "bttx",
        day: "1/2-T4",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(infoSchedule);

  return (
    <div className="movie-schedule">
      {data.dataFilm.map((film, index) => {
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
                          date={data.title}
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
      })}
    </div>
  );
};

export default ContentDay;
