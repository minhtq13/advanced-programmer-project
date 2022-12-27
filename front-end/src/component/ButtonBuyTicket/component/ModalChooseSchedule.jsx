import React, { useState } from "react";
import dataSchedule from "../../../pages/Schedule/components/dataSchedule";
import OptionsDay from "./components/OptionsDay";
import "./ModalChooseSchedule.scss";
const ModalChooseSchedule = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  return (
    <div className="modal-choose-schedule-page">
      <div className="name-theater">Rạp Beta Thanh Xuân</div>
      <div className="header-mcs">
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
        {/* Same Contentday components */}
        <OptionsDay
          data={dataSchedule.find((schedule) => schedule.id === currentIndex)}
        />
      </div>
    </div>
  );
};

export default ModalChooseSchedule;
