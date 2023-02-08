import React, { useState } from "react";
import "./Admin.scss";
import { Layout, Menu } from "antd";
import ShowtimeUpdate from "./components/ShowtimeUpdate";
import UpdateFilm from "./components/UpdateFilm";
import { MenuItemAdmin } from "./MenuItemAdmin";
import UpdateTicket from "./components/UpdateTicket";
import Revenue from "./components/Revenue";
import TicketsSold from "./components/TicketsSold";
import BookingTickets from "./components/BookingTickets";
import AccountManagement from "./components/AccountManagement";
import AddFilm from "./components/AddFilm";
const { Content, Sider } = Layout;

const renderContent = (keyOption) => {
    switch (keyOption) {
        case "update film":
            return <UpdateFilm />;
        case "add film":
            return <AddFilm />;
        case "update showtime":
            return <ShowtimeUpdate />;
        case "update ticket":
            return <UpdateTicket />;
        case "revenue":
            return <Revenue />;
        case "tickets sold":
            return <TicketsSold />;
        case "booking tickets":
            return <BookingTickets />;
        case "account management":
            return <AccountManagement />;
        default:
            return;
    }
};
const Admin = () => {
    const [keyOption, setKeyOption] = useState("update film");

    return (
        <Layout>
            <Layout>
                <Sider width={200}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={["update film"]}
                        defaultOpenKeys={["1"]}
                        style={{
                            height: "100%",
                            borderRight: 0,
                        }}
                        items={MenuItemAdmin}
                        onClick={(item) => {
                            setKeyOption(item.key);
                        }}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: "0 24px 24px",
                    }}
                >
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {renderContent(keyOption)}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default Admin;
