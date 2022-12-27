import React from "react";
import "./SubMenuNav.scss";

const SubMenuNav = () => {
  return (
    <div className="wrapper-sub-menu">
      <div className="nav-content">
        <ul class="menu">
          <li>
            <a href="#!">BETA THANH XUÂN</a>
            <ul class="sub-menu">
              <li>
                <a href="#!">Home 1</a>
              </li>
              <li>
                <a href="#!">Home 2</a>
                <ul class="sub-menu">
                  <li>
                    <a href="#!">Home 2.1</a>
                    <ul class="sub-menu">
                      <li>
                        <a href="#!">Home 2.1.1</a>
                      </li>
                      <li>
                        <a href="#!">Home 2.1.2</a>
                      </li>
                      <li>
                        <a href="#!">Home 2.1.3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#!">Home 2.2</a>
                  </li>
                  <li>
                    <a href="#!">Home 2.3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#!">Home 3</a>
                <ul class="sub-menu">
                  <li>
                    <a href="#!">Home 3.1</a>
                  </li>
                  <li>
                    <a href="#!">Home 3.2</a>
                  </li>
                  <li>
                    <a href="#!">Home 3.3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubMenuNav;
