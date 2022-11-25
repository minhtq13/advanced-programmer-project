import { Button, Input } from "antd";
import React from "react";
import { useState } from "react";
import "./Member.scss";

const dataHeader = [
  {
    id: 1,
    title: "Thông tin tài khoản",
  },
  {
    id: 2,
    title: "Thẻ thành viên",
  },
  {
    id: 3,
    title: "Hành trình điện ảnh",
  },
  {
    id: 4,
    title: "Điểm Beta",
  },
  {
    id: 5,
    title: "Voucher",
  },
];

const Member = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="member-page">
      <div className="header-member">
        {dataHeader.map((data, index) => {
          return (
            <div
              onClick={() => {
                setCurrentIndex(index);
              }}
              key={index}
              className={`button-options ${
                index === currentIndex ? "active" : ""
              }`}
            >
              {data.title}
            </div>
          );
        })}
      </div>
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
              <Input className="input-member" placeholder="Ngày sinh" />
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
              <Input className="input-member" placeholder="Giới tính" />
            </div>
            <div className="content-item">
              <div className="title">Quận/Huyện</div>
              <Input className="input-member" placeholder="CMND/Hộ chiếu" />
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
    </div>
  );
};

export default Member;
