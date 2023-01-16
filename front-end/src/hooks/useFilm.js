import { useState } from "react";
import { useDispatch } from "react-redux";
import { setListDetailFilm } from "../redux/slices/appSlice";
import {
  getInfoFilm,
  getInfoFilmByNameCinemaService,
  getInfoFilmByNameFilmService,
} from "../services/filmService";
import useNotify from "./useNotify";

const useFilm = () => {
  const [listFilm, setListFilm] = useState([]);

  const notify = useNotify();
  const [infoFilm, setInfoFilm] = useState([]);
  const [infoFilmByCinema, setInfoFilmByCinema] = useState([]);
  const [infoFilmByNameFilm, setInfoFilmByNameFilm] = useState([]);
  const getInfoFilmInFilmPage = (payload = {}) => {
    getInfoFilm(
      payload,
      (res) => {
        setInfoFilm(res.data);
      },
      (err) => {
        console.log(err.response);
        if (err.response.status === 401) {
          notify.warning(err.response.data.message || "Permission denied");
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
          notify.warning(err.response.data.message || "Permission denied");
        }
      }
    );
  };
  const getInfoFilmByNameFilm = (data) => {
    const list = [];
    console.log("data", data);
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
            notify.warning(err.response.data.message || "Permission denied");
          }
        }
      );
    }
    setListFilm(list);
  };

  return {
    listFilm,
    infoFilm,
    getInfoFilmInFilmPage,
    infoFilmByCinema,
    getInfoFilmByNameCinema,
    infoFilmByNameFilm,
    getInfoFilmByNameFilm,
  };
};

export default useFilm;
