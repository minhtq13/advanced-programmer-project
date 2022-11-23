import styled from "styled-components";

export const WrapperStyled = styled.div`
    .wrapper-header {
        height: 75px;
        box-shadow: 0 1px 1px #ddd;
        display: flex;
        justify-content: center;
        background: #fff;
        position: fixed;
        top: 0;
        overflow: hidden;
        width: 100%;
        z-index: 100;
    }
    .main-header {
        // background: #fff;
        height: 100%;
        width: 1150px;
        box-shadow: 0 1px 1px #ddd;
    }

    .nav-logo {
        display: block;
        width: 20%;
        text-align: center;
        margin-top: 10px;
    }

    .nav-contain {
        display: flex;
        width: 100%;
    }

    .nav-content {
        text-align: center;
        margin: auto;
    }

    .nav-links {
        display: block;
        text-decoration-line: none;
        font-size: 18px;
        color: #000;
        font-weight: 600;
    }
    .nav-links:hover {
        color: #337ab7;
    }

    // .search-box {
    //     padding: 10px 10px 10px 10px;
    //     float: right;
    //     width: 300px;
    // }

    // .title {
    //     padding-top: 20px;
    //     text-align: center;
    //     color: blue;
    // }

    //   .login {
    //     margin: auto;
    //     width: 400px;
    //     height: 280px;
    //     border: solid;
    //     border-radius: 10%;
    //     margin-top: 100px;
    //   }

    //   .login-title {
    //     padding-top: 30px;
    //     font-size: 20px;
    //     font-weight: bold;
    //     text-align: center;
    //     color: blue;
    //   }
`;
