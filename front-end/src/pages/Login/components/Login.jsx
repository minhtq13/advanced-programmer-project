/* eslint-disable jsx-a11y/anchor-is-valid */
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import useUsers from "../../../hooks/useUsers";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const { getToken, getUserInfo } = useUsers();
  const onFinish = (values) => {
    getToken(values);
    if (localStorage.getItem("_token")) {
      getUserInfo(values);
      navigate("/home");
    }
  };

  return (
    <div className="wrapper-login-component">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <div className="header-email title">Email</div>
        <Form.Item
          className="form-email"
          name="username"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập Email!",
            },
          ]}
        >
          <Input
            className="input-email"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <div className="header-password title">Mật khẩu</div>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu!",
            },
          ]}
        >
          <Input.Password
            className="input-password"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Mật khẩu"
          />
        </Form.Item>
        <div className="wrapper-login-form-forgot">
          <a className="login-form-forgot" href="">
            Quên mật khẩu?
          </a>
        </div>

        <div className="button-login">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            ĐĂNG NHẬP BẰNG TÀI KHOẢN
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
