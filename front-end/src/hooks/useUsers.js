import { useState } from "react";
import { getInfoUser } from "../services/userService";
import useNotify from "./useNotify";

const useUsers = () => {
  const notify = useNotify();
  const [infoUser, setInfoUser] = useState([]);
  const getInfoUsersInMultiPage = (payload = {}) => {
    getInfoUser(
      payload,
      (res) => {
        setInfoUser(res.data);
      },
      (err) => {
        console.log(err.response);
        if (err.response.status === 401) {
          notify.warning(err.response.data.message || "Permission denied");
        }
      }
    );
  };

  return { infoUser, getInfoUsersInMultiPage };
};

export default useUsers;
