import React, { useEffect } from "react";
import "./index.scss";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import MenuAccount from "../../../component/MenuAccount/MenuAccount";
import SubMenuNav from "../../../component/SubMenuNav/SubMenuNav";
import logoBeta from "../../../asset/images/logoBeta.png";
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
export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!location?.pathname.split("/")[1])
      navigate(`${dataSubmenu[0].submenu[0].ext}/home`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentCinemaName = location?.pathname.split("/")[1];

  return (
    <div className="wrapper-header">
      <nav className="main-header">
        <div className="nav-contain">
          <Link to="/home">
            <div className="logo-beta">
              <img src={logoBeta} alt="" />
            </div>
          </Link>
          <SubMenuNav />
          <div className="nav-content">
            <NavLink to={`/${currentCinemaName}/home`} className="nav-links">
              TRANG CHỦ
            </NavLink>
          </div>
          <div className="nav-content">
            <NavLink
              to={`/${currentCinemaName}/schedule`}
              className="nav-links"
            >
              LỊCH CHIẾU THEO RẠP
            </NavLink>
          </div>
          <div className="nav-content">
            <NavLink to={`/${currentCinemaName}/movie`} className="nav-links">
              PHIM
            </NavLink>
          </div>
          <div className="nav-content">
            <NavLink to={`/${currentCinemaName}/cinemas`} className="nav-links">
              RẠP
            </NavLink>
          </div>
          <div className="nav-content">
            <NavLink to={`/${currentCinemaName}/price`} className="nav-links">
              GIÁ VÉ
            </NavLink>
          </div>
          <div className="nav-content">
            <NavLink to={`/${currentCinemaName}/member`} className="nav-links">
              THÀNH VIÊN
            </NavLink>
          </div>
        </div>
      </nav>
      <div className="menu-account-component">
        <MenuAccount />
      </div>
    </div>
  );
}
