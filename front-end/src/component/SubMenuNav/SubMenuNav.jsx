import { DownOutlined, RightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setCurrentCinema } from "../../redux/slices/appSlice";
import "./SubMenuNav.scss";
const dataSubmenu = [
    {
        id: 1,
        title: "Hà Nội",
        submenu: [
            {
                id: 1,
                title: "Beta Thanh Xuân",
                ext: "bttx",
            },
            {
                id: 2,
                title: "Beta Mỹ Đình",
                ext: "btmd",
            },
        ],
    },
    {
        id: 2,
        title: "TP. Hồ Chí Minh",
        submenu: [
            {
                id: 1,
                title: "Beta Quang Trung",
                ext: "btqt",
            },
        ],
    },
    {
        id: 3,
        title: "Bắc Giang",
        submenu: [
            {
                id: 1,
                title: "Beta Bắc Giang",
                ext: "btbg",
            },
        ],
    },
];

const SubMenuNav = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const currentCinemaPath = location?.pathname.split("/")[1];
    const currentPage = location?.pathname.split("/")[2];

    const renderNameCinema = () => {
        switch (currentCinemaPath) {
            case "bttx":
                return "Beta Thanh Xuân";
            case "btmd":
                return "Beta Mỹ Đình";
            case "btqt":
                return "Beta Quang Trung";
            case "btbg":
                return "Beta Bắc Giang";
            default:
                return "Beta Thanh Xuân";
        }
    };
    const [nameCinema, setNameCinema] = useState(renderNameCinema());

    const handleClickMenuItem = (menu) => {
        setNameCinema(menu.title);
        dispatch(setCurrentCinema(menu.ext));
        navigate(`/${menu.ext}/${currentPage}`);
    };

    return (
        <div className="wrapper-sub-menu">
            <ul className="menu">
                <li className="sub-menu-item">
                    <div className="name-cinema" href="#!">
                        <div>{nameCinema}</div>
                        <DownOutlined />
                    </div>
                    <ul className="sub-menu">
                        {dataSubmenu.map((data, index) => {
                            return (
                                <li key={index}>
                                    <div className="menu1" href="#!">
                                        <span>{data.title}</span>
                                        <RightOutlined />
                                    </div>
                                    <ul className="sub-menu">
                                        {data.submenu.map((menu1, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    onClick={() =>
                                                        handleClickMenuItem(
                                                            menu1
                                                        )
                                                    }
                                                >
                                                    <div className="menu2">
                                                        {menu1.title}
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>
                            );
                        })}
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default SubMenuNav;
