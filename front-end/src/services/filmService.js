import { getRequest } from "../api/apiCaller";
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
export const getInfoFilmByNameCinema = async (
    params,
    successCallback,
    errorCallback
) => {
    await getRequest(
        `${apiPath.getInfoFilmByNameCinema}=${params.type}`,
        params,
        successCallback,
        errorCallback,
        3000
    );
};
