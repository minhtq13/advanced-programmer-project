import styled from "styled-components";

export const WrapperStyled = styled.div`
  .wrapper-header {
    height: 75px;
    box-shadow: 0 1px 1px #ddd;
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 10;
    background-color: #fff;
  }
  .main-header {
    display: flex;
    align-items: center;
    width: calc(1150px + 385px);
    padding-left: 385px;
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
  .menu-cinemas {
    display: flex;
    align-items: center;
    width: 200px !important;
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
  .ant-menu-submenu-title {
    display: flex;
    align-items: center;
  }
  .ant-menu-title-content {
    font-size: 16px;
  }
  svg {
    width: 24px;
    height: 24px;
  }
`;
