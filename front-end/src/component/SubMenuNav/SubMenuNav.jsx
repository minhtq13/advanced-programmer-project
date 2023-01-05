import { DownOutlined, RightOutlined } from "@ant-design/icons";
import React from "react";
import "./SubMenuNav.scss";

const SubMenuNav = () => {
  return (
    <div className="wrapper-sub-menu">
      <ul class="menu">
        <li>
          <a className="name-cinema" href="#!">
            <span>Beta Thanh Xuân</span>
            <DownOutlined />
          </a>
          <ul style={{ position: "absolute" }} class="sub-menu">
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
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SubMenuNav;
