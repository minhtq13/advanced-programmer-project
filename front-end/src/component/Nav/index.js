import React from "react";
import { Link } from "react-router-dom";
import { WrapperStyled } from "./styled";
export default function Nav() {
  return (
    <WrapperStyled>
      <nav>
        <Link to="/home" exact className="nav-logo">
          <h1>Trang chủ</h1>
        </Link>
        <div className="nav-contain">
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
    </WrapperStyled>
  );
}
