import React, { useState } from "react";
import BetaPoint from "./components/BetaPoint";
import InfoUser from "./components/InfoUser";
import MembershipCard from "./components/MembershipCard";
import "./Member.scss";

const dataHeader = [
  {
    id: 1,
    title: "Thông tin tài khoản",
  },
  {
    id: 2,
    title: "Thẻ thành viên",
  },
  {
    id: 3,
    title: "Hành trình điện ảnh",
  },
  {
    id: 4,
    title: "Điểm Beta",
  },
  {
    id: 5,
    title: "Voucher",
  },
];

const Member = () => {
  const renderContent = () => {
    switch (currentIndex) {
      case 0:
        return <InfoUser />;
      case 1:
        return <MembershipCard />;
      case 3:
        return <BetaPoint />;
      default:
        return;
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="member-page">
      <div className="header-member">
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

export default Member;
