import React from "react";
import "./AvatarFilm.scss";

const AvatarFilm = ({ width, height, image, borderRadius }) => {
    return (
        <div
            className="wrapper-avatar-film-component"
            style={{
                width: `${width}px`,
                height: `${height}px`,
                borderRadius: `${borderRadius}px`,
                objectFit: "cover",
            }}
        >
            <img
                src={require(`../../asset/images/${image}`)}
                alt="Avatar Film"
                style={{ borderRadius: `${borderRadius}px` }}
            />
        </div>
    );
};

export default AvatarFilm;
