import { toast } from "react-toastify";

export const notificationErr = (message) => {
    toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
    });
};

export const notificationSuccess = (message) => {
    toast.success(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
    });
};

export const notificationWarning = (message) => {
    toast.warning(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
    });
};
