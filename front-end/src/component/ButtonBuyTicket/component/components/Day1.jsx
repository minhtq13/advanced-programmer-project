import React from "react";
import TimeItem from "../../../TimeItem/TimeItem";
import dataDay1 from "./dataDay1";
import "./Day.scss";

const Day1 = () => {
  return (
    <div className="movie-schedule">
      {dataDay1.map((data, index) => {
        return (
          <div className="movie-item-schedule col-6" key={index}>
            <div className="detail">
              <div className="film-name">{data.title}</div>
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

export default Day1;
