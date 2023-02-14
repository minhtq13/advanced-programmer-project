import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useSchedule from "../../hooks/useSchedule";
import ContentDay from "./components/ContentDay";
import "./Schedule.scss";

const Schedule = () => {
  const location = useLocation();
  const currentCinema = location?.pathname.split("/")[1];
  const [currentIndex, setCurrentIndex] = useState(0);
  const {
    infoSchedule,
    getInfoSchedule,
    infoScheduleByNameCinema,
    getInfoScheduleByNameCinema,
  } = useSchedule();
  const [datePlay, setDatePlay] = useState("1/2-T4");

  useEffect(() => {
    if (infoScheduleByNameCinema) {
      getInfoScheduleByNameCinema({
        nameCinema: currentCinema,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCinema]);
  useEffect(() => {
    if (datePlay && currentCinema) {
      getInfoSchedule({
        nameCinema: currentCinema,
        day: datePlay,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [datePlay, currentCinema]);

  const allDay = [...new Set(infoScheduleByNameCinema.map((day) => day.day))];

  const listObjOfDay = allDay
    .map((day, index) => ({
      id: index,
      date: day.charAt(0),
      month: day.charAt(2),
      dayOfWeek: day.substring(4),
    }))
    .sort((a, b) =>
      a.month === b.month ? a.date - b.date : a.month - b.month
    );

  return (
    <div className="schedule-page">
      <div className="header-schedule">
        {listObjOfDay.map((data, index) => {
          return (
            <div
              onClick={() => {
                setCurrentIndex(data.id);
                setDatePlay(
                  data.date + "/" + data.month + "-" + data.dayOfWeek
                );
              }}
              key={index}
              className={`button-options ${
                data.id === currentIndex ? "active" : ""
              }`}
            >
              {data.dayOfWeek + " - " + data.date + "/" + data.month}
            </div>
          );
        })}
      </div>
      <div className="tab-content">
        <ContentDay data={infoSchedule} />
      </div>
    </div>
  );
};

export default Schedule;
