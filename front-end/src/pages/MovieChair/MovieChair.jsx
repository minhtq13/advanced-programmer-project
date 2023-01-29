import React from "react";
import "./MovieChair.scss";
import ChooseChair from "./components/ChooseChair";
import InfoFilm from "./components/InfoFilm";
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
