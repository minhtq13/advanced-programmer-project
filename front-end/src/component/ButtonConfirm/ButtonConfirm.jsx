import { Button } from "antd";
import React from "react";
import "./ButtonConfirm.scss";

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
