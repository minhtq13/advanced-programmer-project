import { getRequest } from "../api/apiCaller";
import { apiPath } from "../config/apiPath";
export const getInfoUser = async (params, successCallback, errorCallback) => {
  await getRequest(
    `${apiPath.getInfoUser}`,
    params,
    successCallback,
    errorCallback,
    3000
  );
};
