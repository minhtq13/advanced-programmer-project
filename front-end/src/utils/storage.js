export const checkDataInLocalStorage = (data) => {
    if (
        !data ||
        data === null ||
        data === undefined ||
        data === "null" ||
        data === "undefined"
    ) {
        return false;
    }
    return true;
};

export const saveUserInfo = (
    username,
    email,
    phone,
    gender,
    birthday,
    uuid
) => {
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("gender", gender);
    localStorage.setItem("birthday", birthday);
    localStorage.setItem("_uuid", uuid);
};

export const getUserName = () => {
    return localStorage.getItem("username");
};
export const getUserInfo = () => {
    const userInfo = {
        userName: localStorage.getItem("username"),
        email: localStorage.getItem("email"),
        phone: localStorage.getItem("phone"),
        gender: localStorage.getItem("gender"),
        birthday: localStorage.getItem("birthday"),
    };

    return userInfo;
};

export const clearUserInfo = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("birthday");
    localStorage.removeItem("gender");
    localStorage.removeItem("phone");
    localStorage.removeItem("_uuid");
};

export const saveUsername = (username) => {
    localStorage.setItem("username_rmb", username);
};

export const clearUsername = () => {
    localStorage.removeItem("username_rmb");
};

export const getToken = () => {
    const token = localStorage.getItem("_token");
    return token;
};

export const getTokenType = () => {
    const tokenType = localStorage.getItem("_token_type");
    return tokenType;
};

export const getRefreshToken = () => {
    const rfToken = localStorage.getItem("_refreshToken");
    return rfToken;
};

export const getTimeExpr = () => {
    const time = localStorage.getItem("_timeExpr");
    return time;
};

// export const getUserInfo = () => {
//     const userInfo = localStorage.getItem("_currentUser");

//     return JSON.parse(userInfo);
// };

// export const saveUserRemember = (username) => {
//     if (username) {
//         localStorage.setItem("username_rmb", username);
//     }
// };

// export const removeUserRemember = () => {
//     localStorage.removeItem("username_rmb");
// };

// export const getUsernameRemember = () => {
//     const username = localStorage.getItem("username_rmb");
//     if (checkDataInLocalStorage(username)) {
//         return username;
//     }
//     return "";
// };

export const setToken = (token) => {
    localStorage.setItem("_token", token);
};

export const setRefeshToken = (refeshToken) => {
    localStorage.setItem("_refeshToken", refeshToken);
};

export const getUid = () => {
    const uid = localStorage.getItem("_uuid");
    if (checkDataInLocalStorage(uid)) {
        return +uid;
    }
    return "";
};
export const getAuthenticationName = () => {
    const username = localStorage.getItem("authenticationName");
    if (checkDataInLocalStorage(username)) {
        return username;
    }
    return "";
};
