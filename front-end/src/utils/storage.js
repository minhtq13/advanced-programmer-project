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
    access_token,
    authentication_name,
    expires_in,
    jti,
    refresh_token,
    role,
    token_type,
    uuid
) => {
    localStorage.setItem("_token", access_token);
    localStorage.setItem("authenticationName", authentication_name);
    localStorage.setItem("_refreshToken", refresh_token);
    localStorage.setItem("_expiresIn", expires_in);
    localStorage.setItem("_jti", jti);
    localStorage.setItem("_role", role);
    localStorage.setItem("_token_type", token_type);
    localStorage.setItem("_uuid", uuid);
};

export const clearUserInfo = () => {
    localStorage.removeItem("_token");
    localStorage.removeItem("authenticationName");
    localStorage.removeItem("_refreshToken");
    localStorage.removeItem("_expiresIn");
    localStorage.removeItem("_jti");
    localStorage.removeItem("_role");
    localStorage.removeItem("_token_type");
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

export const getUserInfo = () => {
    const userInfo = localStorage.getItem("_currentUser");

    return JSON.parse(userInfo);
};

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
