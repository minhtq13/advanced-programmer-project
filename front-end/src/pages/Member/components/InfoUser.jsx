import {
  CreditCardOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Button, DatePicker, Input, Select } from "antd";
import React, { useEffect } from "react";
import useUsers from "../../../hooks/useUsers";
import "./InfoUser.scss";

const InfoUser = () => {
  const { infoUser, getInfoUsersInMultiPage } = useUsers();
  useEffect(() => {
    if (infoUser) {
      getInfoUsersInMultiPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <Input className="input-member" placeholder="Họ và tên" />
          </div>
          <div className="content-item">
            <div className="title">
              <span style={{ color: "red" }}>
                <span style={{ color: "red" }}>*</span>
              </span>
              Số điện thoại
            </div>
            <Input
              prefix={<PhoneOutlined />}
              className="input-member"
              placeholder="Số điện thoại"
            />
          </div>
          <div className="content-item">
            <div className="title">
              <span style={{ color: "red" }}>
                <span style={{ color: "red" }}>*</span>
              </span>
              Ngày sinh
            </div>
            <DatePicker
              className="input-member"
              placement="bottomLeft"
              placeholder="Ngày sinh"
            />
          </div>
          <div className="content-item">
            <div className="title">Tỉnh/Thành phố</div>
            <Input className="input-member" placeholder="Tỉnh/Thành phố" />
          </div>
        </div>
        <div className="column2">
          <div className="content-item">
            <div className="title">
              <span style={{ color: "red" }}>*</span> Email
            </div>
            <Input
              prefix={<MailOutlined />}
              className="input-member"
              placeholder="taminh596@gmail.com"
              disabled
            />
          </div>
          <div className="content-item">
            <div className="title">
              <span style={{ color: "red" }}>*</span> CMND/Hộ chiếu
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
              defaultValue="Giới tính"
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
            <Input className="input-member" placeholder="Quận/Huyện" />
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
