import { DownOutlined, RightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
      {
        id: 3,
        title: "Beta Đan Phượng",
        ext: "btdp",
      },
      {
        id: 4,
        title: "Beta Giải Phóng",
        ext: "btgp",
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
  {
    id: 4,
    title: "Đồng Nai",
    submenu: [
      {
        id: 1,
        title: "Beta Đồng Nai",
        ext: "btdn",
      },
      {
        id: 2,
        title: "Beta Long Khánh",
        ext: "btlk",
      },
      {
        id: 3,
        title: "Beta Long Thành",
        ext: "btlt",
      },
    ],
  },
];

const SubMenuNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const rendenNameCinema = () => {};

  // const { currentCinema } = useSelector((state) => state.appReducer);
  const [nameCinema, setNameCinema] = useState("Beta Thanh Xuân");
  const currentPage = location?.pathname.split("/")[2];

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
                          onClick={() => handleClickMenuItem(menu1)}
                        >
                          <div className="menu2">{menu1.title}</div>
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
