import { getRequest } from "../api/apiCaller";
import { apiPath } from "../config/apiPath";
export const getInfoTicket = async (params, successCallback, errorCallback) => {
  await getRequest(
    `${apiPath.getInfoTickets}`,
    params,
    successCallback,
    errorCallback,
    3000
  );
};
