import React from "react";
import { Link } from "react-router-dom";
import { WrapperStyled } from "./styled";
import logoBeta from "../../../asset/images/logoBeta.png";
import { Menu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
export default function Nav() {
    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }
    const items = [
        getItem("Beta Thanh Xuân", "sub2", <AppstoreOutlined />, [
            getItem("Hà Nội", "sub3", null, [
                getItem("Beta Thanh Xuân", "1"),
                getItem("Beta Giải Phóng", "2"),
            ]),
            getItem("TPHCM", "sub4", null, [getItem("Beta Quang Trung", "3")]),
            getItem("Bắc Giang", "sub5", null, [
                getItem("Beta Bắc Giang", "4"),
            ]),
        ]),
    ];
    return (
        <WrapperStyled>
            <div className="wrapper-header">
                <nav className="main-header">
                    <div className="nav-contain">
                        <Link to="/home">
                            <div className="logo-beta" style={{}}>
                                <img src={logoBeta} alt="" />
                            </div>
                        </Link>

                        <Menu
                            className="menu-cinemas"
                            style={{
                                width: 256,
                            }}
                            mode="vertical"
                            items={items}
                        />
                        <div className="nav-content">
                            <Link to="/home" exact className="nav-links">
                                Trang chủ
                            </Link>
                        </div>
                        <div className="nav-content">
                            <Link to="/schedule" exact className="nav-links">
                                Lịch chiếu theo rạp
                            </Link>
                        </div>
                        <div className="nav-content">
                            <Link to="/movie" exact className="nav-links">
                                Phim
                            </Link>
                        </div>
                        <div className="nav-content">
                            <Link to="/cinemas" exact className="nav-links">
                                Rạp
                            </Link>
                        </div>
                        <div className="nav-content">
                            <Link to="/price" exact className="nav-links">
                                Giá vé
                            </Link>
                        </div>
                        <div className="nav-content">
                            <Link to="/member" exact className="nav-links">
                                Thành viên
                            </Link>
                        </div>
                        <div className="nav-content">
                            <Link to="/" exact={true} className="nav-links">
                                Log out
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </WrapperStyled>
    );
}
