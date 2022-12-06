import { Button } from "antd";
import React, { useState } from "react";
import "./ButtonConfirm.scss";

const ButtonConfirm = ({ buttonName }) => {
  const [loading, setLoading] = useState(false);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="wrapper-button-confirm">
      <Button
        className="button-confirm"
        key="submit"
        type="primary"
        loading={loading}
        onClick={handleOk}
      >
        {buttonName}
      </Button>
    </div>
  );
};

export default ButtonConfirm;
