import React, { useState } from "react";
import "./SubMenuNav.scss";
import { DownOutlined, RightOutlined } from "@ant-design/icons";

const dataSubmenu = [
    {
        id: 1,
        title: "Hà Nội",
        submenu: [
            {
                id: 1,
                title: "Beta Thanh Xuân",
            },
            {
                id: 2,
                title: "Beta Mỹ Đình",
            },
            {
                id: 3,
                title: "Beta Đan Phượng",
            },
            {
                id: 4,
                title: "Beta Giải Phóng",
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
            },
        ],
    },
    {
        id: 4,
        title: "Đồng Nai",
        submenu: [
            {
                id: 1,
                title: "Beta Đồng Nai",
            },
            {
                id: 2,
                title: "Beta Long Khánh",
            },
            {
                id: 3,
                title: "Beta Long Thành",
            },
        ],
    },
];

const SubMenuNav = () => {
    const [nameCinema, setNameCinema] = useState("Beta Thanh Xuân");

    return (
        <div className="wrapper-sub-menu">
            <ul className="menu">
                <li className="sub-menu-item">
                    <a className="name-cinema" href="#!">
                        <div>{nameCinema}</div>
                        <DownOutlined />
                    </a>
                    <ul className="sub-menu">
                        {dataSubmenu.map((data, index) => {
                            return (
                                <li key={index}>
                                    <a className="menu1" href="#!">
                                        <span>{data.title}</span>
                                        <RightOutlined />
                                    </a>
                                    <ul className="sub-menu">
                                        {data.submenu.map((menu1, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    onClick={() =>
                                                        setNameCinema(
                                                            menu1.title
                                                        )
                                                    }
                                                >
                                                    <a href="#!">
                                                        {menu1.title}
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>
                            );
                        })}
                    </ul>

                    {/* <ul class="sub-menu">
            <li>
              <a className="menu1" href="#!">
                <span>Hà Nội</span>
                <RightOutlined />
              </a>
              <ul class="sub-menu">
                <li>
                  <a href="#!">Beta Thanh Xuân</a>
                </li>
                <li>
                  <a href="#!">Beta Mỹ Đình</a>
                </li>
                <li>
                  <a href="#!">Beta Đan Phượng</a>
                </li>
                <li>
                  <a href="#!">Beta Giải Phóng</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="menu1" href="#!">
                <span>TP. Hồ Chí Minh</span>
                <RightOutlined />
              </a>
              <ul class="sub-menu">
                <li>
                  <a href="#!">Beta Quang Trung</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="menu1" href="#!">
                <span>Bắc Giang</span>
                <RightOutlined />
              </a>
              <ul class="sub-menu">
                <li>
                  <a href="#!">Beta Bắc Giang</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="menu1" href="#!">
                <span>Đồng Nai</span>
                <RightOutlined />
              </a>
              <ul class="sub-menu">
                <li>
                  <a href="#!">Beta Đồng Nai</a>
                </li>
                <li>
                  <a href="#!">Beta Long Khánh</a>
                </li>
                <li>
                  <a href="#!">Beta Long Thành</a>
                </li>
              </ul>
            </li>
          </ul> */}
                </li>
            </ul>
        </div>
    );
};

export default SubMenuNav;
