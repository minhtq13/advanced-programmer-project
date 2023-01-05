import { useState } from "react";

import { getInfoScheduleService } from "../services/scheduleService";
import useNotify from "./useNotify";

const useSchedule = () => {
  const notify = useNotify();
  const [infoSchedule, setInfoSchedule] = useState([]);
  const getInfoSchedule = (payload = {}) => {
    getInfoScheduleService(
      payload,
      (res) => {
        setInfoSchedule(res.data);
      },
      (err) => {
        console.log(err.response);
        if (err.response.status === 401) {
          notify.warning(err.response.data.message || "Permission denied");
        }
      }
    );
  };

  return { infoSchedule, getInfoSchedule };
};

export default useSchedule;
