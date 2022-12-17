import { toast } from "react-toastify";
// import { DEFAULT_TIME_AUTO_HIDE_TOASTIFY } from "../constants/appConstants";

const useNotify = () => {
  const error = (message, position = "top-right", autoClose, icon) => {
    toast.error(message, {
      position: position,
      autoClose: autoClose || 3000,
      hideProgressBar: true,
      theme: "colored",
      closeButton: false,
    });
  };

  const success = (message, position = "top-right", autoClose) => {
    toast.success(message, {
      position: position,
      autoClose: autoClose || 3000,
      hideProgressBar: true,
      theme: "colored",
      closeButton: false,
    });
  };

  const warning = (message, position = "top-right", autoClose) => {
    toast.warning(message, {
      position: position,
      autoClose: autoClose || 3000,
      hideProgressBar: true,
      theme: "colored",
      closeButton: false,
    });
  };

  return { error, success, warning };
};

export default useNotify;
