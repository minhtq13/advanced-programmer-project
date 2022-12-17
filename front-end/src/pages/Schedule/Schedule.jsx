import React, { useState } from "react";
import dataSchedule from "./components/dataSchedule";

import ContentDay from "./components/ContentDay";
import "./Schedule.scss";

const Schedule = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <div className="schedule-page">
      <div className="header-schedule">
        {dataSchedule.map((data, index) => {
          return (
            <div
              onClick={() => {
                setCurrentIndex(data.id);
              }}
              key={index}
              className={`button-options ${
                data.id === currentIndex ? "active" : ""
              }`}
            >
              {data.title}
            </div>
          );
        })}
      </div>
      <div className="tab-content">
        <ContentDay
          data={dataSchedule.find((schedule) => schedule.id === currentIndex)}
        />
      </div>
    </div>
  );
};

export default Schedule;
