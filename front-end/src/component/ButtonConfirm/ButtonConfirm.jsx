import React from "react";
import "./ButtonConfirm.scss";
import { Button } from "antd";

const ButtonConfirm = ({ buttonName, handleClickConfirm, handleDisabled }) => {
    return (
        <div className="wrapper-button-confirm">
            <Button
                disabled={handleDisabled}
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
