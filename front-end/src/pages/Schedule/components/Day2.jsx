import { ClockCircleOutlined, TagsOutlined } from "@ant-design/icons";
import React from "react";
import TimeItem from "../../../component/TimeItem/TimeItem";
import dataDay2 from "./dataDay2";
import "./Day.scss";
const Day2 = () => {
  return (
    <div className="movie-schedule">
      {dataDay2.map((data, index) => {
        return (
          <div className="movie-item-schedule col-6" key={index}>
            <img src={data.img} alt="" />
            <div className="detail">
              <div className="film-name">{data.title}</div>
              <div className="tag-time">
                <div className="tag-film">
                  <TagsOutlined />
                  {data.tag}
                </div>
                <div className="time-film">
                  <ClockCircleOutlined /> {data.duration} phút
                </div>
              </div>
              <div className="desc">
                <div className="animation">{data.animation}</div>
                <div className="wrapper-list-time">
                  {data.children.map((time, index) => {
                    return (
                      <div className="list-time" key={index}>
                        <TimeItem
                          nameFilm={data.title}
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

export default Day2;
