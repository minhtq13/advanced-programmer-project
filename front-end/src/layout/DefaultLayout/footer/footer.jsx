/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.scss";
import { RightOutlined } from "@ant-design/icons";
import { dataColumn1, dataColumn2, dataColumn3 } from "./data";
import Phone from "../../../asset/images/phone.png";
import logoBeta from "../../../asset/images/logoBeta.png";
import DaThongBao from "../../../asset/images/dathongbao.png";
// import SubMenuNav from "../../../component/SubMenuNav/SubMenuNav";

const footer = () => {
    return (
        <div>
            <div>
                {/* <SubMenuNav /> */}
                <footer className="footer">
                    <div className="grid" style={{ width: "1150px" }}>
                        <div className="grid__row">
                            <div className="grid__column-footer">
                                <div
                                    className="logo-web"
                                    style={{ marginBottom: "10px" }}
                                >
                                    <img src={logoBeta} alt="" />
                                </div>
                                <ul className="list-options">
                                    {dataColumn1.map((data, index) => {
                                        return (
                                            <div
                                                className="column-options"
                                                key={index}
                                            >
                                                <RightOutlined />
                                                <li className="footer-item">
                                                    {data.title}
                                                </li>
                                            </div>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className="grid__column-footer">
                                <div className="footer__heading">
                                    C???M R???P BETA
                                </div>
                                <div className="line"></div>
                                <ul className="footer-list">
                                    {dataColumn2.map((data, index) => {
                                        return (
                                            <div
                                                className="column-options"
                                                key={index}
                                            >
                                                <RightOutlined />

                                                <li className="footer-item">
                                                    {data.title}
                                                </li>
                                            </div>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div
                                className="grid__column-footer "
                                // style={{ width: "15%" }}
                            >
                                <div className="footer__heading">THEO D??I</div>
                                <div className="line1"></div>
                                <ul className="footer-list">
                                    {dataColumn3.map((data, index) => {
                                        return (
                                            <li
                                                className="footer-item"
                                                key={index}
                                            >
                                                <div className="icon-and-title">
                                                    <div className="icon">
                                                        {data.icon}
                                                    </div>
                                                    <div className="title">
                                                        {data.title}
                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <img
                                    style={{ height: "68px", width: "180px" }}
                                    src={DaThongBao}
                                    alt=""
                                />
                            </div>
                            <div
                                className="grid__column-footer"
                                // style={{ width: "20%" }}
                            >
                                <div className="footer__heading">LI??N H???</div>
                                <div className="line2"></div>
                                <div className="detail">
                                    <h3
                                        className="title"
                                        style={{ fontSize: "18px" }}
                                    >
                                        C??NG TY C??? PH???N BETA MEDIA
                                    </h3>
                                    <p>
                                        Gi???y ch???ng nh???n ??KKD s???: 0106633482 -
                                        ????ng k?? l???n ?????u ng??y 08/09/2014 t???i S???
                                        K??? ho???ch v?? ?????u t?? Th??nh ph??? H?? N???i
                                    </p>
                                    <p>
                                        ?????a ch??? tr??? s???: T???ng 3, s??? 595, ???????ng
                                        Gi???i Ph??ng, ph?????ng Gi??p B??t, qu???n Ho??ng
                                        Mai, th??nh ph??? H?? N???i
                                    </p>
                                    <div style={{ fontStyle: "italic" }}>
                                        Hotline: 0934 632 682
                                    </div>
                                    <div style={{ fontStyle: "italic" }}>
                                        Email: cskh@betacorp.vn
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            marginTop: "16px",
                                        }}
                                    >
                                        Li??n h??? h???p t??c kinh doanh:
                                    </div>
                                    <h3>minh@betacorp.vn</h3>
                                </div>
                            </div>
                        </div>
                        <div className="footer__call">
                            <div className="hotline-phone">
                                <div className="hotline-phone-circle">
                                    <span href="tel:0986 005 720">
                                        <img
                                            className="hotline-rung"
                                            src={Phone}
                                            alt="S??? ??i???n tho???i"
                                            width="50"
                                        />
                                    </span>
                                    <div className="hotline-bar">
                                        <span className="text-hotline">
                                            099 999 999
                                        </span>
                                    </div>
                                </div>
                                <div className="wrapper-phone"></div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default footer;
