import React from "react";
import "./Register.scss";
import { Button, DatePicker, Input, Select } from "antd";
import { LockOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

const Register = () => {
    return (
        <div className="wrapper-register-component">
            <div className="content-register">
                <div style={{ display: "flex" }}>
                    <div className="column1">
                        <div className="content-item">
                            <div className="title">
                                <span>*</span> Họ và tên
                            </div>
                            <Input
                                className="input-member"
                                placeholder="Họ và tên"
                            />
                        </div>
                        <div className="content-item">
                            <div className="title">
                                <span>*</span> Mật khẩu
                            </div>
                            <Input
                                prefix={
                                    <LockOutlined className="site-form-item-icon" />
                                }
                                className="input-member"
                                placeholder="Số điện thoại"
                            />
                        </div>
                        <div className="content-item">
                            <div className="title">
                                <span>*</span> Ngày sinh
                            </div>
                            <DatePicker
                                className="input-member"
                                placement="bottomLeft"
                                placeholder="Ngày sinh"
                            />
                        </div>
                        <div className="content-item">
                            <div className="title">
                                <span>*</span> Số điện thoại
                            </div>
                            <Input
                                prefix={<PhoneOutlined />}
                                className="input-member"
                                placeholder="Số điện thoại"
                            />
                        </div>
                    </div>
                    <div className="column2">
                        <div className="content-item">
                            <div className="title">
                                <span>*</span> Email
                            </div>
                            <Input
                                prefix={<MailOutlined />}
                                className="input-member"
                                placeholder="Email"
                            />
                        </div>
                        <div className="content-item">
                            <div className="title">
                                <span>*</span> Xác nhận lại mật khẩu
                            </div>
                            <Input
                                prefix={
                                    <LockOutlined className="site-form-item-icon" />
                                }
                                className="input-member"
                                placeholder="Xác nhận lại mật khẩu"
                            />
                        </div>
                        <div className="content-item">
                            <div className="title">Giới tính</div>
                            <Select
                                className="input-member"
                                defaultValue="Giới tính"
                                style={{
                                    width: 235,
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
                    </div>
                </div>

                <div className="footer-register">
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="register-form-button"
                    >
                        ĐĂNG KÝ
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Register;
