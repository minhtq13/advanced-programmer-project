import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import "./Account.scss";

const dataHeader = [
    {
        id: 1,
        title: "ĐĂNG NHẬP",
    },
    {
        id: 2,
        title: "ĐĂNG KÝ",
    },
];
const Account = () => {
    const renderContent = () => {
        switch (currentIndex) {
            case 0:
                return <Login />;
            case 1:
                return <Register />;

            default:
                return;
        }
    };
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <div className="wrapper-account-component">
            <div className="account-component">
                <div className="header">
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
                <div className="content">{renderContent()}</div>
            </div>
        </div>
    );
};

export default Account;
