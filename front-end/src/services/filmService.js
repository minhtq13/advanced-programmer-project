import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "../api/apiCaller";
import { apiPath } from "../config/apiPath";
export const getInfoFilm = async (params, successCallback, errorCallback) => {
  await getRequest(
    `${apiPath.getInfoFilm}`,
    params,
    successCallback,
    errorCallback,
    3000
  );
};
export const getInfoFilmByNameCinemaService = async (
  params,
  successCallback,
  errorCallback
) => {
  await getRequest(
    `${apiPath.getFilmByNameCinema}`,
    params,
    successCallback,
    errorCallback,
    3000
  );
};
export const getInfoFilmByNameFilmService = async (
  params,
  successCallback,
  errorCallback
) => {
  await getRequest(
    `${apiPath.getFilmByNameFilm}`,
    params,
    successCallback,
    errorCallback,
    3000
  );
};
export const addFilmService = async (
  params,
  successCallback,
  errorCallback
) => {
  await postRequest(
    `${apiPath.addFilm}`,
    params,
    successCallback,
    errorCallback,
    3000
  );
};
export const updateFilmService = async (
  params,
  successCallback,
  errorCallback
) => {
  await putRequest(
    `${apiPath.updateFilm}`,
    params,
    successCallback,
    errorCallback,
    3000
  );
};
export const deleteFilmService = async (
  params,
  successCallback,
  errorCallback
) => {
  await deleteRequest(
    `${apiPath.deleteFilm}`,
    params,
    successCallback,
    errorCallback,
    3000
  );
};
