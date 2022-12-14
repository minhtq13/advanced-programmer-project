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
export default function Nav() {
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
