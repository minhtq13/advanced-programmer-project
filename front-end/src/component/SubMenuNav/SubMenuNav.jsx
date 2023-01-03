import { DownOutlined, RightOutlined } from "@ant-design/icons";
import React from "react";
import "./SubMenuNav.scss";

const dataMenu = [
  {
    id: 1,
    title: "Home 1",
    submenu: [],
  },
  {
    id: 2,
    title: "Home 2",
    submenu: [
      {
        title: "Home 2.1",
        children: [
          {
            title: "Home 2.1.1",
          },
          {
            title: "Home 2.1.2",
          },
          {
            title: "Home 2.1.3",
          },
        ],
      },
      {
        title: "Home 2.2",
        children: [],
      },
    ],
  },
  {
    id: 3,
    title: "Home 3",
    submenu: [
      {
        title: "Home 3.1",
      },
      {
        title: "Home 3.2",
      },
    ],
  },
];

// const SubMenuNav = () => {
//   return (
//     <div className="wrapper-sub-menu">
//       <div className="nav-content">
//         <ul class="menu">
//           <li>
//             <a href="#!">BETA THANH XUÂN</a>
//             {dataMenu.map((menu1) => {
//               return (
//                 <ul className="sub-menu">
//                   <li>
//                     <a href="#!">{menu1.title}</a>
//                     {menu1.submenu.map((menu2) => {
//                       return (
//                         <ul className="sub-menu">
//                           <li>
//                             <a href="#!">{menu2.title}</a>
//                             {menu2.children.map((menu3) => {
//                               return (
//                                 <ul className="sub-menu">
//                                   <li>
//                                     <a href="#!">{menu3.title}</a>
//                                   </li>
//                                 </ul>
//                               );
//                             })}
//                           </li>
//                         </ul>
//                       );
//                     })}
//                   </li>
//                 </ul>
//               );
//             })}
//             <ul class="sub-menu">
//               <li>
//                 <a href="#!">Home 1</a>
//               </li>
//               <li>
//                 <a href="#!">Home 2</a>
//                 <ul class="sub-menu">
//                   <li>
//                     <a href="#!">Home 2.1</a>
//                     <ul class="sub-menu">
//                       <li>
//                         <a href="#!">Home 2.1.1</a>
//                       </li>
//                       <li>
//                         <a href="#!">Home 2.1.2</a>
//                       </li>
//                       <li>
//                         <a href="#!">Home 2.1.3</a>
//                       </li>
//                     </ul>
//                   </li>
//                   <li>
//                     <a href="#!">Home 2.2</a>
//                   </li>
//                   <li>
//                     <a href="#!">Home 2.3</a>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a href="#!">Home 3</a>
//                 <ul class="sub-menu">
//                   <li>
//                     <a href="#!">Home 3.1</a>
//                   </li>
//                   <li>
//                     <a href="#!">Home 3.2</a>
//                   </li>
//                   <li>
//                     <a href="#!">Home 3.3</a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SubMenuNav;

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
