import { getRequest } from "../api/apiCaller";
import { apiPath } from "../config/apiPath";
export const getAllInfoCinema = async (
    params,
    successCallback,
    errorCallback
) => {
    await getRequest(
        `${apiPath.getAllInfoCinema}`,
        params,
        successCallback,
        errorCallback,
        3000
    );
};
export const getInfoCinemaService = async (
    params,
    successCallback,
    errorCallback
) => {
    await getRequest(
        `${apiPath.getInfoCinema}`,
        params,
        successCallback,
        errorCallback,
        3000
    );
};
