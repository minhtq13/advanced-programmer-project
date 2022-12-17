import { useState } from "react";
import { getInfoCinema } from "../services/cinemaService";
import useNotify from "./useNotify";

const useCinema = () => {
  const notify = useNotify();
  const [infoCinema, setInfoCinema] = useState([]);
  const getInfoCinemaInCinamePage = (payload = {}) => {
    getInfoCinema(
      payload,
      (res) => {
        setInfoCinema(res.data);
      },
      (err) => {
        console.log(err.response);
        if (err.response.status === 401) {
          notify.warning(err.response.data.message || "Permission denied");
        }
      }
    );
  };

  return { infoCinema, getInfoCinemaInCinamePage };
};

export default useCinema;
