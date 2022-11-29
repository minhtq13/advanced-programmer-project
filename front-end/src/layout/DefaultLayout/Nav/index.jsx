import React, { useState } from "react";
import { Link } from "react-router-dom";
import { WrapperStyled } from "./styled";
import logoBeta from "../../../asset/images/logoBeta.png";
import { Menu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import MenuAccount from "../../../component/MenuAccount/MenuAccount";
export default function Nav() {
  const [cinemaName, setCinemaName] = useState("Beta Thanh Xuân");
  function getItem(label, key, icon, children, type) {
    return {
      label,
      key,
      icon,
      children,
      type,
    };
  }
  const items = [
    getItem(cinemaName, "sub1", <AppstoreOutlined />, [
      getItem("Hà Nội", "sub2", null, [
        getItem("Beta Thanh Xuân", "1"),
        getItem("Beta Giải Phóng", "2"),
      ]),
      getItem("TPHCM", "sub3", null, [getItem("Beta Quang Trung", "3")]),
      getItem("Bắc Giang", "sub4", null, [getItem("Beta Bắc Giang", "4")]),
    ]),
  ];
  const handleClick = (e) => {
    if (e.key === "1") return setCinemaName("Beta Thanh Xuân");
    else if (e.key === "2") return setCinemaName("Beta Giải Phóng");
    else if (e.key === "3") return setCinemaName("Beta Quang Trung");
    else if (e.key === "4") return setCinemaName("Beta Bắc Giang");
  };
  return (
    <WrapperStyled>
      <div className="wrapper-header">
        <nav className="main-header">
          <div className="nav-contain">
            <Link to="/home">
              <div className="logo-beta">
                <img src={logoBeta} alt="" />
              </div>
            </Link>

            <Menu
              onClick={handleClick}
              className="menu-cinemas"
              style={{
                width: 256,
              }}
              mode="vertical"
              items={items}
            />
            <div className="nav-content">
              <Link to="/home" className="nav-links">
                Trang chủ
              </Link>
            </div>
            <div className="nav-content">
              <Link to="/schedule" className="nav-links">
                Lịch chiếu theo rạp
              </Link>
            </div>
            <div className="nav-content">
              <Link to="/movie" className="nav-links">
                Phim
              </Link>
            </div>
            <div className="nav-content">
              <Link to="/cinemas" className="nav-links">
                Rạp
              </Link>
            </div>
            <div className="nav-content">
              <Link to="/price" className="nav-links">
                Giá vé
              </Link>
            </div>
            <div className="nav-content">
              <Link to="/member" className="nav-links">
                Thành viên
              </Link>
            </div>
          </div>
        </nav>
        <div className="nav-content">
          <MenuAccount />
        </div>
      </div>
    </WrapperStyled>
  );
}
