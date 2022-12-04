/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./MenuAccount.scss";
import { useNavigate } from "react-router-dom";

const MenuAccount = () => {
    const navigate = useNavigate();

    const items = [
        {
            key: "1",
            label: <div className="drop-item">Thông tin tài khoản</div>,
            onClick: () => {
                navigate("/member");
            },
        },
        {
            key: "2",
            label: <div className="drop-item">Thẻ thành viên</div>,
        },
        {
            key: "3",
            label: <div className="drop-item">Đăng xuất</div>,
            onClick: () => {
                console.log("123");
            },
        },
    ];

    return (
        <div>
            <Dropdown
                className="dropdown-menu-account"
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
                        Xin chào : <span className="username">Username</span>
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </div>
    );
};
export default MenuAccount;
