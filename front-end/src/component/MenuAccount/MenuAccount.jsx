/* eslint-disable jsx-a11y/anchor-is-valid */
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsLogin } from "../../redux/slices/appSlice";
import { clearUserInfo, getUserName } from "../../utils/storage";
import "./MenuAccount.scss";

const MenuAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin } = useSelector((state) => state.appReducer);
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
        clearUserInfo();
        dispatch(setIsLogin(false));
      },
    },
  ];
  const username = getUserName();

  const menu = useMemo(() => {
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
              Xin chào : <span className="username">{username}</span>
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, isLogin]);

  return username ? (
    menu
  ) : (
    <div style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>
      Đăng nhập
    </div>
  );
};
export default MenuAccount;
