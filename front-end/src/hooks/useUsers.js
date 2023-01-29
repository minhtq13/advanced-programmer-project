import { useState } from "react";
import { useDispatch } from "react-redux";
import useNotify from "./useNotify";
import { getInfoUser } from "../services/userService";
import { getUserByToken, loginRequest } from "../services/authService";
import { saveUserInfo } from "../utils/storage";
import { setIsLogin } from "../redux/slices/appSlice";

const useUsers = () => {
    const dispatch = useDispatch();
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
                    notify.warning(
                        err.response.data.message || "Permission denied"
                    );
                }
            }
        );
    };

    const getToken = (payload = {}) => {
        loginRequest(
            payload,
            (res) => {
                localStorage.setItem("_token", res.data.token);
            },
            (err) => {
                console.log(err.response);
                if (err.response.status === 401) {
                    notify.warning(
                        err.response.data.message || "Permission denied"
                    );
                }
            }
        );
    };
    const getUserInfo = (payload = {}) => {
        getUserByToken(
            payload,
            (res) => {
                saveUserInfo(
                    res.data.username,
                    res.data.email,
                    res.data.phoneNumber,
                    res.data.gender,
                    res.data.birthday
                );
                dispatch(setIsLogin(true));
            },
            (err) => {
                console.log(err.response);
                if (err.response.status === 401) {
                    notify.warning(
                        err.response.data.message || "Permission denied"
                    );
                }
            }
        );
    };
    return {
        infoUser,
        getInfoUsersInMultiPage,
        getToken,
        getUserInfo,
    };
};

export default useUsers;
