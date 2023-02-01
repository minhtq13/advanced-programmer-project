import React from "react";
import { useSelector } from "react-redux";
import PayQR from "./components/PayQR";
import ChooseChair from "./components/ChooseChair";
import InfoFilm from "./components/InfoFilm";
import "./MovieChair.scss";
const MovieChair = () => {
    const { step } = useSelector((state) => state.appReducer);
    const renderContent = () => {
        switch (step) {
            case 0:
                return <ChooseChair />;
            case 1:
                return <PayQR />;

            default:
                break;
        }
    };
    return (
        <div className="wrapper-movie-chair">
            <div className="content">{renderContent()}</div>
            <div className="side-bar">
                <InfoFilm />
            </div>
        </div>
    );
};

export default MovieChair;
