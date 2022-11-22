import React from "react";
import { Link } from "react-router-dom";
import { WrapperStyled } from "./styled";
import logoBeta from "../../../asset/images/logoBeta.png";
export default function Nav() {
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

            <div className="nav-content">
              <Link to="/home" exact className="nav-links">
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
            <div className="nav-content">
              <Link to="/" className="nav-links">
                Log out
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </WrapperStyled>
  );
}
