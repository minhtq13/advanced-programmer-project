import React, { useEffect } from "react";
import useTickets from "../../hooks/useTickets";
import ChooseChair from "./components/ChooseChair";
import InfoFilm from "./components/InfoFilm";
import "./MovieChair.scss";
const MovieChair = () => {
  // eslint-disable-next-line no-unused-vars
  // const { infoTicket, getInfoTicketsInMultiPage } = useTickets();
  // useEffect(() => {
  //   if (infoTicket) {
  //     getInfoTicketsInMultiPage();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className="wrapper-movie-chair">
      <div className="content">
        <ChooseChair />
      </div>
      <div className="side-bar">
        <InfoFilm />
      </div>
    </div>
  );
};

export default MovieChair;
