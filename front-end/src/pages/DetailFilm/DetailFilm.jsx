import React from "react";
import "./DetailFilm.scss";
import { useSelector } from "react-redux";

const DetailFilm = () => {
    const { detailFilm } = useSelector((state) => state.appReducer);
    console.log(detailFilm);
    return <div className="test-exten">DetailFilm</div>;
};

export default DetailFilm;
