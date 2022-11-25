import { Button, DatePicker, Input, Select } from "antd";
import React from "react";
import "./InfoUser.scss";

const InfoUser = () => {
  return (
    <div className="content-member">
      <div style={{ display: "flex" }}>
        <div className="column1">
          <div className="content-item">
            <div className="title">* Họ và tên</div>
            <Input className="input-member" placeholder="Họ và tên" />
          </div>
          <div className="content-item">
            <div className="title">* Số điện thoại</div>
            <Input className="input-member" placeholder="Số điện thoại" />
          </div>
          <div className="content-item">
            <div className="title">* Ngày sinh</div>
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
            <div className="title">* Email</div>
            <Input
              className="input-member"
              placeholder="taminh596@gmail.com"
              disabled
            />
          </div>
          <div className="content-item">
            <div className="title">* CMND/Hộ chiếu</div>
            <Input className="input-member" placeholder="CMND/Hộ chiếu" />
          </div>
          <div className="content-item">
            <div className="title">Giới tính</div>
            {/* <Input className="input-member" placeholder="Giới tính" /> */}
            <Select
              className="input-member"
              defaultValue="lucy"
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
