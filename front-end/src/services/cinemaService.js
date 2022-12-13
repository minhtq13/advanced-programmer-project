import { getRequest } from "../api/apiCaller";
import { apiPath } from "../config/apiPath";
export const getInfoCinema = async (params, successCallback, errorCallback) => {
  await getRequest(
    `${apiPath.getInfoCinema}`,
    params,
    successCallback,
    errorCallback,
    3000
  );
};
