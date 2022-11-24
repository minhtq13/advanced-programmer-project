import styled from "styled-components";

export const WrapperStyled = styled.div`
    .wrapper-price {
        display: flex;
        justify-content: center;
        // padding-bottom: 50px;
    }
    .header-price {
        height: 100px;
        display: flex;
        align-items: center;
    }
    .img-price {
        width: 1150px;
    }
    img {
        width: 100%;
        height: 100%;
    }
    .title {
        font-size: 24px;
        font-weight: 600;
        border-bottom: 4px solid transparent;
        border-image: linear-gradient(to right, #39adf0 0%, #075fa3 100%);
        border-image-slice: 1;
        padding-bottom: 10px;
        // margin-bottom: 30px;
    }
`;
