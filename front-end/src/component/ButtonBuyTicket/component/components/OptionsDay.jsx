import React from "react";
import TimeItem from "../../../TimeItem/TimeItem";
import "./OptionsDay.scss";

const OptionsDay = ({ data }) => {
  return (
    <div className="options-day">
      {data.dataFilm.map((film, index) => {
        console.log(film);
        return (
          <div className="movie-item-schedule col-6" key={index}>
            <div className="detail">
              <div className="film-name">{film.title}</div>
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

export default OptionsDay;
