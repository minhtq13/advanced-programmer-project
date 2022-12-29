/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./DropDownSubMenu.scss";

const DropDownSubMenu = () => {
    const [cinemaName, setCinemaName] = useState("Beta Thanh Xuân");
    const items = [
        {
            key: "1",
            label: (
                <div
                    className="drop-item"
                    onClick={() => {
                        setCinemaName("Beta Thanh Xuân");
                    }}
                >
                    Beta Thanh Xuân
                </div>
            ),
        },
        {
            key: "2",
            label: (
                <div
                    className="drop-item"
                    onClick={() => {
                        setCinemaName("Beta Giải Phóng");
                    }}
                >
                    Beta Giải Phóng
                </div>
            ),
        },
        {
            key: "3",
            label: (
                <div
                    className="drop-item"
                    onClick={() => {
                        setCinemaName("Beta Đan Phượng");
                    }}
                >
                    Beta Đan Phượng
                </div>
            ),
        },
        {
            key: "4",
            label: (
                <div
                    className="drop-item"
                    onClick={() => {
                        setCinemaName("Beta Mỹ Đình");
                    }}
                >
                    Beta Mỹ Đình
                </div>
            ),
        },
    ];

    return (
        <div className="wrapper-dropdown-sub-menu">
            <Dropdown
                className="dropdown-sub-menu"
                placement="bottomRight"
                menu={{
                    items,
                }}
                arrow={{
                    pointAtCenter: true,
                }}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        {cinemaName}
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </div>
    );
};
export default DropDownSubMenu;
