import React, { useState } from "react";
import Day1 from "./component/Day1";
import Day2 from "./component/Day2";
import "./Schedule.scss";
const dataHeader = [
    {
        id: 1,
        title: "28/11 - T2",
    },
    {
        id: 2,
        title: "29/11 - T3",
    },
    {
        id: 3,
        title: "30/11 - T4",
    },
    {
        id: 4,
        title: "31/11 - T5",
    },
];

const Schedule = () => {
    const renderContent = () => {
        switch (currentIndex) {
            case 0:
                return <Day1 />;
            case 1:
                return <Day2 />;

            default:
                return;
        }
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <div className="schedule-page">
            <div className="header-schedule">
                {dataHeader.map((data, index) => {
                    return (
                        <div
                            onClick={() => {
                                setCurrentIndex(index);
                            }}
                            key={index}
                            className={`button-options ${
                                index === currentIndex ? "active" : ""
                            }`}
                        >
                            {data.title}
                        </div>
                    );
                })}
            </div>
            <div className="tab-content">{renderContent()}</div>
        </div>
    );
};

export default Schedule;
