import React from "react";
import "./ButtonConfirm.scss";
import { Button } from "antd";

const ButtonConfirm = ({ buttonName, handleClickConfirm }) => {
    return (
        <div className="wrapper-button-confirm">
            <Button
                className="button-confirm"
                key="submit"
                type="primary"
                onClick={handleClickConfirm}
            >
                {buttonName}
            </Button>
        </div>
    );
};

export default ButtonConfirm;
