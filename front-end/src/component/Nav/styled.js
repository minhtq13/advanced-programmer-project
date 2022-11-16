import styled from "styled-components";

export const WrapperStyled = styled.div`
    nav {
        display: flex;
        background: #fff;
        color: white;
        height: 70px;
        box-shadow: 0 1px 3px #ddd;
    }
    .main-header {
        position: fixed;
        width: 100%;
    }

    .nav-logo {
        display: block;
        width: 20%;
        text-align: center;
        margin-top: 10px;
    }

    .nav-contain {
        width: 80%;
        display: flex;
    }

    .nav-content {
        text-align: center;
        margin: auto;
    }

    .nav-links {
        display: block;
        text-decoration-line: none;
    }

    .search-box {
        padding: 10px 10px 10px 10px;
        float: right;
        width: 300px;
    }

    .title {
        padding-top: 20px;
        text-align: center;
        color: blue;
    }

    .login {
        margin: auto;
        width: 400px;
        height: 280px;
        border: solid;
        border-radius: 10%;
        margin-top: 100px;
    }

    .login-title {
        padding-top: 30px;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        color: blue;
    }
`;
