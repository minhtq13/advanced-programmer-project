import React, { useState } from "react";
import "./ButtonBuyTicket.scss";
import { Button, Modal } from "antd";
import ModalChooseSchedule from "./component/ModalChooseSchedule";

const ButtonBuyTicket = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="wrapper-button-buy-ticket">
            <Button
                type="primary"
                onClick={showModal}
                className="button-buy-ticket"
            >
                Mua vé
            </Button>
            <Modal
                className="modal-button-buy-ticket"
                title="LỊCH CHIẾU"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[]}
                width={"50vw"}
            >
                <ModalChooseSchedule />
            </Modal>
        </div>
    );
};

export default ButtonBuyTicket;
