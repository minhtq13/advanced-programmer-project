import React, { useEffect, useState } from "react";
import useSchedule from "../../../hooks/useSchedule";
import OptionsDay from "./components/OptionsDay";

import "./ModalChooseSchedule.scss";

const ModalChooseSchedule = () => {
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
        nameCinema: "bttx",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (datePlay)
      getInfoSchedule({
        nameCinema: "bttx",
        day: datePlay,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [datePlay]);
  const allDay = [...new Set(infoScheduleByNameCinema.map((day) => day.day))];

  const listObjOfDay = [];
  for (let i = 0; i < allDay.length; i++) {
    listObjOfDay.push({
      date: allDay[i].charAt(0),
      month: allDay[i].charAt(2),
      dayOfWeek: allDay[i].substring(4),
    });
  }

  listObjOfDay.sort((a, b) => {
    if (a.month === b.month) {
      return a.date - b.date;
    } else {
      return a.month - b.month;
    }
  });
  for (let i = 0; i < listObjOfDay.length; i++) {
    listObjOfDay[i]["id"] = i;
  }

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
        <OptionsDay data={infoSchedule} />
      </div>
    </div>
  );
};

export default ModalChooseSchedule;

// import React, { useState } from "react";
// import dataSchedule from "../../../pages/Schedule/components/dataSchedule";
// import OptionsDay from "./components/OptionsDay";
// import "./ModalChooseSchedule.scss";
// const ModalChooseSchedule = () => {
//   const [currentIndex, setCurrentIndex] = useState(1);
//   return (
//     <div className="modal-choose-schedule-page">
//       <div className="name-theater">Rạp Beta Thanh Xuân</div>
//       <div className="header-mcs">
//         {dataSchedule.map((data, index) => {
//           return (
//             <div
//               onClick={() => {
//                 setCurrentIndex(data.id);
//               }}
//               key={index}
//               className={`button-options ${
//                 data.id === currentIndex ? "active" : ""
//               }`}
//             >
//               {data.title}
//             </div>
//           );
//         })}
//       </div>
//       <div className="tab-content">
//         {/* Same Contentday components */}
//         <OptionsDay
//           data={dataSchedule.find((schedule) => schedule.id === currentIndex)}
//         />
//       </div>
//     </div>
//   );
// };

// export default ModalChooseSchedule;
