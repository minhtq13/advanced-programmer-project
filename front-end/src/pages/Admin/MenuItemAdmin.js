import {
    LaptopOutlined,
    NotificationOutlined,
    UserOutlined,
} from "@ant-design/icons";

import React from "react";
import "./Admin.scss";

export const MenuItemAdmin = [
    {
        key: 1,
        icon: React.createElement(UserOutlined),
        label: "Quản lý phim",
        children: [
            {
                key: "update film",
                label: "Cập nhật phim",
            },
            {
                key: "add film",
                label: "Thêm phim",
            },
        ],
    },
    {
        key: 2,
        icon: React.createElement(LaptopOutlined),
        label: "Quản lý suất chiếu",
        children: [
            {
                key: "update showtime",
                label: "Cập nhật suất chiếu",
            },
        ],
    },
    {
        key: 3,
        icon: React.createElement(LaptopOutlined),
        label: "Quản lý đặt vé",
        children: [
            {
                key: "update ticket",
                label: "Tình trạng vé",
            },
        ],
    },
    {
        key: 4,
        icon: React.createElement(NotificationOutlined),
        label: "Thống kê",
        children: [
            {
                key: "revenue",
                label: "Doanh thu",
            },
            {
                key: "tickets sold",
                label: "Số lượng vé đã bán",
            },
            {
                key: "booking tickets",
                label: "Số lượng khách đã đặt vé",
            },
        ],
    },
    {
        key: 5,
        icon: React.createElement(UserOutlined),
        label: "Quản lý người dùng",
        children: [
            {
                key: "account management",
                label: "Quản lý người dùng",
            },
        ],
    },
];
