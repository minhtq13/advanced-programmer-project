import { useState } from "react";
import {
    getAllInfoCinema,
    getInfoCinemaService,
} from "../services/cinemaService";
import useNotify from "./useNotify";

const useCinema = () => {
    const notify = useNotify();
    const [infoAllCinema, setAllInfoCinema] = useState([]);
    const [infoCinema, setInfoCinema] = useState();
    const getInfoCinemaInCinamePage = (payload = {}) => {
        getAllInfoCinema(
            payload,
            (res) => {
                setAllInfoCinema(res.data);
            },
            (err) => {
                console.log(err.response);
                if (err.response.status === 401) {
                    notify.warning(
                        err.response.data.message || "Permission denied"
                    );
                }
            }
        );
    };
    const getInfoCinema = (payload = {}) => {
        getInfoCinemaService(
            payload,
            (res) => {
                setInfoCinema(res.data);
            },
            (err) => {
                console.log(err.response);
                if (err.response.status === 401) {
                    notify.warning(
                        err.response.data.message || "Permission denied"
                    );
                }
            }
        );
    };

    return {
        infoAllCinema,
        getInfoCinema,
        infoCinema,
        getInfoCinemaInCinamePage,
    };
};

export default useCinema;
