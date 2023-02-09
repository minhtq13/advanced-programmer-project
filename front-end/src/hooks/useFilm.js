import { useState } from "react";
import { useDispatch } from "react-redux";
import {
    setRefreshAddFilm,
    setRefreshRemoveFilm,
    setRefreshUpdateFilm,
} from "../redux/slices/refreshSlice";
import {
    addFilmService,
    deleteFilmService,
    getInfoFilm,
    getInfoFilmByNameCinemaService,
    getInfoFilmByNameFilmService,
    updateFilmService,
} from "../services/filmService";
import useNotify from "./useNotify";

const useFilm = () => {
    const [listFilm, setListFilm] = useState([]);
    const dispatch = useDispatch();
    const notify = useNotify();
    const [infoFilm, setInfoFilm] = useState([]);
    const [infoFilmByCinema, setInfoFilmByCinema] = useState([]);

    const getInfoFilmInFilmPage = (payload = {}) => {
        getInfoFilm(
            payload,
            (res) => {
                setInfoFilm(res.data);
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
    const getInfoFilmByNameCinema = (payload = {}) => {
        getInfoFilmByNameCinemaService(
            payload,
            (res) => {
                setInfoFilmByCinema(res.data);
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
    const getInfoFilmByNameFilm = (data) => {
        const list = [];

        for (let i = 0; i < data.length; i++) {
            getInfoFilmByNameFilmService(
                {
                    nameFilm: data[i]?.nameFilm,
                },
                (res) => {
                    list.push(res.data[0]);
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
        }
        setListFilm(list);
    };
    const addFilm = (payload = {}) => {
        addFilmService(
            payload,
            (res) => {
                console.log(res.response);
                notify.success("Add film successfully!");
                dispatch(setRefreshAddFilm(Date.now()));
            },
            (err) => {
                console.log(err.response);
                notify.error("Add film fail!");
            }
        );
    };
    const updateFilm = (payload = {}) => {
        updateFilmService(
            payload,
            (res) => {
                console.log(res.response);
                notify.success("Update film successfully!");
                dispatch(setRefreshUpdateFilm(Date.now()));
            },
            (err) => {
                console.log(err.response);
                notify.error("Update film fail!");
            }
        );
    };

    const deleteFilm = (payload = {}) => {
        deleteFilmService(
            payload,
            (res) => {
                console.log(res.response);
                notify.success("Delete film successfully!");
                dispatch(setRefreshRemoveFilm(Date.now()));
            },
            (err) => {
                console.log(err.response);
                notify.error("Delete film fail!");
            }
        );
    };

    return {
        listFilm,
        infoFilm,
        getInfoFilmInFilmPage,
        infoFilmByCinema,
        getInfoFilmByNameCinema,
        getInfoFilmByNameFilm,
        addFilm,
        updateFilm,
        deleteFilm,
    };
};

export default useFilm;
