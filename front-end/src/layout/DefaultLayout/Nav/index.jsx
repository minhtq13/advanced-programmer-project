/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoBeta from "../../../asset/images/logoBeta.png";
import { Menu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import MenuAccount from "../../../component/MenuAccount/MenuAccount";
import "./index.scss";
// eslint-disable-next-line no-unused-vars
import SubMenuNav from "../../../component/SubMenuNav/SubMenuNav";
import DropDownSubMenu from "../../../component/DropDownSubMenu/DropDownSubMenu";
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
                getItem("Beta Mỹ Đình", "2"),
                getItem("Beta Đan Phượng", "3"),
                getItem("Beta Giải Phóng", "4"),
            ]),
            getItem("TPHCM", "sub3", null, [getItem("Beta Quang Trung", "9")]),
            getItem("Bắc Giang", "sub4", null, [
                getItem("Beta Bắc Giang", "10"),
            ]),
        ]),
    ];
    const handleClick = (e) => {
        if (e.key === "1") return setCinemaName("Beta Thanh Xuân");
        else if (e.key === "2") return setCinemaName("Beta Mỹ Đình");
        else if (e.key === "3") return setCinemaName("Beta Đan Phượng");
        else if (e.key === "4") return setCinemaName("Beta Giải Phóng");
        else if (e.key === "9") return setCinemaName("Beta Quang Trung");
        else if (e.key === "10") return setCinemaName("Beta Bắc Giang");
    };
    return (
        <div className="wrapper-header">
            <nav className="main-header">
                <div className="nav-contain">
                    <Link to="/home">
                        <div className="logo-beta">
                            <img src={logoBeta} alt="" />
                        </div>
                    </Link>

                    {/* <Menu
                        onClick={handleClick}
                        className="menu-cinemas"
                        style={{
                            width: 256,
                        }}
                        mode="vertical"
                        items={items}
                    />
                    <SubMenuNav /> */}
                    <DropDownSubMenu />
                    <div className="nav-content">
                        <NavLink to="/home" className="nav-links">
                            TRANG CHỦ
                        </NavLink>
                    </div>
                    <div className="nav-content">
                        <NavLink to="/schedule" className="nav-links">
                            LỊCH CHIẾU THEO RẠP
                        </NavLink>
                    </div>
                    <div className="nav-content">
                        <NavLink to="/movie" className="nav-links">
                            PHIM
                        </NavLink>
                    </div>
                    <div className="nav-content">
                        <NavLink to="/cinemas" className="nav-links">
                            RẠP
                        </NavLink>
                    </div>
                    <div className="nav-content">
                        <NavLink to="/price" className="nav-links">
                            GIÁ VÉ
                        </NavLink>
                    </div>
                    <div className="nav-content">
                        <NavLink to="/member" className="nav-links">
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
