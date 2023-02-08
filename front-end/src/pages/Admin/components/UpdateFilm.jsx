import { Button } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import noFilmIcon from "../../../asset/images/no-films-icon.png";
import AvatarFilm from "../../../component/AvatarFilm/AvatarFilm";
import useFilm from "../../../hooks/useFilm";
import { setDetailFilm } from "../../../redux/slices/appSlice";
import "./UpdateFilm.scss";
import removeFilmIcon from "../../../asset/images/remove-icon.svg";
import ModalPopup from "../../../component/ModalPopup/ModalPopup";
const UpdateFilm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { infoFilmByCinema, getInfoFilmByNameCinema } = useFilm();
    const currentCinema = location?.pathname.split("/")[1];
    useEffect(() => {
        if (infoFilmByCinema) {
            getInfoFilmByNameCinema({
                nameCinema: currentCinema,
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentCinema]);
    const handleDeleteFilm = () => {};
    return (
        <div className="wrapper-update-film">
            <div className="header-update-film">Danh sách phim</div>
            <div className="content-update-film">
                {infoFilmByCinema.length !== 0 ? (
                    infoFilmByCinema.map((item, index) => {
                        const { name, img, category, duration, premiereDate } =
                            item;
                        return (
                            <div className="movie-item" key={index}>
                                <ModalPopup
                                    right="95"
                                    buttonOpenModal={
                                        <img
                                            src={removeFilmIcon}
                                            alt=""
                                            className="remove-icon"
                                        />
                                    }
                                    title="Delete Film"
                                    message={
                                        " Are you sure to remove this film and all of its related data? "
                                    }
                                    confirmMessage={
                                        "This action cannot be undone."
                                    }
                                    icon={removeFilmIcon}
                                    ok={"Ok"}
                                    onAccept={() => handleDeleteFilm()}
                                />
                                <div>
                                    <AvatarFilm
                                        image={img}
                                        width={227.5}
                                        height={360}
                                        borderRadius={12}
                                    />
                                </div>
                                <div className="info-movie">
                                    <div className="title-movie">
                                        <div
                                            onClick={() => {
                                                navigate(
                                                    `/${currentCinema}/detail-film`
                                                );
                                                dispatch(setDetailFilm(item));
                                            }}
                                        >
                                            {name}
                                        </div>
                                    </div>
                                    <div className="desc-movie">
                                        <div className="vibe-movie detail">
                                            <div className="options">
                                                Thể loại :
                                            </div>
                                            <div className="info-vive">
                                                {category}
                                            </div>
                                        </div>
                                        <div className="time-movie detail">
                                            <div className="options">
                                                Thời lượng :
                                            </div>
                                            <div className="info-time">
                                                {duration} phút
                                            </div>
                                        </div>
                                        <div className="date-movie detail">
                                            <div className="options">
                                                Ngày khởi chiếu :
                                            </div>
                                            <div className="info-date">
                                                {premiereDate}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="buy-ticket"
                                    onClick={() => {
                                        dispatch(setDetailFilm(item));
                                    }}
                                >
                                    <Button
                                        type="primary"
                                        className="btn-update btn-primary"
                                    >
                                        Cập nhật
                                    </Button>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="film-not-data">
                        <img src={noFilmIcon} alt="" />
                        <span>No Films</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UpdateFilm;
