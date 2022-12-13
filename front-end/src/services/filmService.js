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
