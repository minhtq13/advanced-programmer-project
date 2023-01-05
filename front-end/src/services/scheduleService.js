import { getRequest } from "../api/apiCaller";
import { apiPath } from "../config/apiPath";
export const getInfoScheduleService = async (
  params,
  successCallback,
  errorCallback
) => {
  await getRequest(
    `${apiPath.getInfoSchedule}`,
    params,
    successCallback,
    errorCallback,
    3000
  );
};
