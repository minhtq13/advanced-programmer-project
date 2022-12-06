import React from "react";
import ChooseChair from "./components/ChooseChair";
import InfoFilm from "./components/InfoFilm";
import "./MovieChair.scss";
const MovieChair = () => {
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
