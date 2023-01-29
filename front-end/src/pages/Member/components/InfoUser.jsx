import React from "react";
import "./InfoUser.scss";
import {
    CreditCardOutlined,
    MailOutlined,
    PhoneOutlined,
} from "@ant-design/icons";
import { Button, DatePicker, Input, Select } from "antd";
import { getUserInfo } from "../../../utils/storage";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import weekYear from "dayjs/plugin/weekYear";

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);

const InfoUser = () => {
    const userInfo = getUserInfo();
    const dobFormat = userInfo?.birthday?.replaceAll("-", "/");
    const dateFormat = "DD/MM/YYYY";

    return (
        <div className="content-member">
            <div style={{ display: "flex" }}>
                <div className="column1">
                    <div className="content-item">
                        <div className="title">
                            <span style={{ color: "red" }}>
                                <span style={{ color: "red" }}>*</span>
                            </span>
                            Họ và tên
                        </div>
                        <Input
                            defaultValue={userInfo.userName}
                            className="input-member"
                            placeholder="Họ và tên"
                        />
                    </div>
                    <div className="content-item">
                        <div className="title">
                            <span style={{ color: "red" }}>
                                <span style={{ color: "red" }}>*</span>
                            </span>
                            Số điện thoại
                        </div>
                        <Input
                            defaultValue={userInfo.phone}
                            prefix={<PhoneOutlined />}
                            className="input-member"
                            placeholder="Số điện thoại"
                        />
                    </div>
                    <div className="content-item">
                        <div className="title">
                            <span style={{ color: "red" }}>*</span>
                            Ngày sinh
                        </div>
                        <DatePicker
                            defaultValue={
                                dobFormat ? dayjs(dobFormat, dateFormat) : ""
                            }
                            format={dateFormat}
                            className="input-member"
                            placement="bottomLeft"
                            placeholder="Ngày sinh"
                        />
                    </div>
                    <div className="content-item">
                        <div className="title">Tỉnh/Thành phố</div>
                        <Input
                            className="input-member"
                            placeholder="Tỉnh/Thành phố"
                        />
                    </div>
                </div>
                <div className="column2">
                    <div className="content-item">
                        <div className="title">
                            <span style={{ color: "red" }}>*</span> Email
                        </div>
                        <Input
                            defaultValue={userInfo.email}
                            prefix={<MailOutlined />}
                            className="input-member"
                            placeholder="abc@gmail.com"
                            disabled
                        />
                    </div>
                    <div className="content-item">
                        <div className="title">
                            <span style={{ color: "red" }}>*</span> CMND/Hộ
                            chiếu
                        </div>
                        <Input
                            prefix={<CreditCardOutlined />}
                            className="input-member"
                            placeholder="CMND/Hộ chiếu"
                        />
                    </div>
                    <div className="content-item">
                        <div className="title">Giới tính</div>
                        <Select
                            className="input-member"
                            defaultValue={userInfo.gender === 0 ? "Nữ" : "Nam"}
                            style={{
                                width: 530,
                            }}
                            options={[
                                {
                                    value: "Giới tính",
                                    label: "Giới tính",
                                },
                                {
                                    value: "Nam",
                                    label: "Nam",
                                },
                                {
                                    value: "Nữ",
                                    label: "Nữ",
                                },
                                {
                                    value: "Khác",
                                    label: "Khác",
                                },
                            ]}
                        />
                    </div>
                    <div className="content-item">
                        <div className="title">Quận/Huyện</div>
                        <Input
                            className="input-member"
                            placeholder="Quận/Huyện"
                        />
                    </div>
                </div>
            </div>
            <div className="content-item">
                <div className="title">Địa chỉ</div>
                <Input.TextArea
                    className="input-member-address"
                    placeholder="Địa chỉ"
                />
            </div>
            <div className="footer-member">
                <div className="change-pass-text">Đổi mật khẩu?</div>
                <div className="wrapper-button">
                    <Button type="primary" className="update-member">
                        CẬP NHẬT
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default InfoUser;
