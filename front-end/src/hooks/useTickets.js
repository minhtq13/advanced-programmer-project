import { useState } from "react";
import { getInfoTicket } from "../services/ticketService";
import useNotify from "./useNotify";

const useTickets = () => {
  const notify = useNotify();
  const [infoTicket, setInfoTicket] = useState([]);
  const getInfoTicketsInMultiPage = (payload = {}) => {
    getInfoTicket(
      payload,
      (res) => {
        setInfoTicket(res.data);
      },
      (err) => {
        console.log(err.response);
        if (err.response.status === 401) {
          notify.warning(err.response.data.message || "Permission denied");
        }
      }
    );
  };

  return { infoTicket, getInfoTicketsInMultiPage };
};

export default useTickets;
