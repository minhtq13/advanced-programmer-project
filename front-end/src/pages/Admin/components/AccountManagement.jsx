import { Table, Tag } from "antd";
import React, { useEffect, useMemo } from "react";
import useUsers from "../../../hooks/useUsers";
const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Phone Number",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
  },
  {
    title: "Email",
    key: "email",
    dataIndex: "email",
  },
  {
    title: "Gender",
    key: "gender",
    dataIndex: "gender",
  },
  {
    title: "Birthday",
    dataIndex: "birthday",
    key: "birthday",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    render: (_, { role }) => (
      <>
        {role.map((tag) => {
          let color = "green";
          if (tag === "Admin") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];
const AccountManagement = () => {
  const { getInfoUsersInMultiPage, infoUser } = useUsers();
  useEffect(() => {
    if (infoUser) {
      getInfoUsersInMultiPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataUser = useMemo(() => {
    if (infoUser?.length)
      return infoUser.map((user, index) => ({
        id: user.id,
        username: user.username,
        phoneNumber: user.phoneNumber,
        email: user.email,
        gender: user.gender === 1 ? "Nam" : "Nữ",
        birthday: user.birthday,
        role: user.role === 1 ? ["Admin"] : ["User"],
        key: index + 1,
      }));
  }, [infoUser]);

  return (
    <Table
      columns={columns}
      dataSource={dataUser}
      pagination={{
        pageSize: 10,
      }}
    />
  );
};
export default AccountManagement;
