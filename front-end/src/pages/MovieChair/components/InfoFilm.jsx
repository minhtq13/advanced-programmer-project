import React from "react";
import "./InfoFilm.scss";
import { useSelector } from "react-redux";
import {
    ClockCircleOutlined,
    FieldTimeOutlined,
    FundProjectionScreenOutlined,
    MenuUnfoldOutlined,
    PicCenterOutlined,
    ScheduleOutlined,
    TagsOutlined,
} from "@ant-design/icons";
import AvatarFilm from "../../../component/AvatarFilm/AvatarFilm";
import ButtonConfirm from "../../../component/ButtonConfirm/ButtonConfirm";

const InfoFilm = () => {
    const { chooseChair, fieldFilm, timeItemInMovieChair } = useSelector(
        (state) => state.appReducer
    );
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    const handleOk = () => {};
    return (
        <div className="wrapper-info-film">
            <div className="row1">
                <AvatarFilm
                    image={fieldFilm.film.img}
                    width={150}
                    height={237}
                />
                <div className="name-animation">
                    <div className="name">{fieldFilm.film.name}</div>
                    <div className="animation">
                        {fieldFilm.animation} Phụ đề
                    </div>
                </div>
            </div>
            <div className="row2">
                <div className="wrapper-item">
                    <div className="info">
                        <TagsOutlined /> Thể loại
                    </div>
                    <div className="detail">{fieldFilm.film.category}</div>
                </div>
                <div className="wrapper-item">
                    <div className="info">
                        <ClockCircleOutlined /> Thời lượng
                    </div>
                    <div className="detail">{fieldFilm.film.duration} phút</div>
                </div>
            </div>
            <div className="row3">
                <div className="wrapper-item">
                    <div className="info">
                        <MenuUnfoldOutlined /> Rạp chiếu
                    </div>
                    <div className="detail">Beta Thanh Xuân</div>
                </div>
                <div className="wrapper-item">
                    <div className="info">
                        <ScheduleOutlined /> Ngày chiếu
                    </div>
                    <div className="detail">{fieldFilm.day}</div>
                </div>
                <div className="wrapper-item">
                    <div className="info">
                        <FieldTimeOutlined /> Giờ chiếu
                    </div>
                    <div className="detail">{timeItemInMovieChair}</div>
                </div>
                <div className="wrapper-item">
                    <div className="info">
                        <FundProjectionScreenOutlined /> Phòng chiếu
                    </div>
                    <div className="detail">Phòng {getRandomInt(1, 3)}</div>
                </div>
                <div className="wrapper-item">
                    <div className="info">
                        <PicCenterOutlined /> Ghế ngồi
                    </div>
                    <div style={{ display: "flex" }} className="detail">
                        {chooseChair?.map((chair, index) => (
                            <div className="chair-name" key={index}>
                                {chair.value}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="button-confirm-component">
                <ButtonConfirm
                    handleClickConfirm={handleOk}
                    buttonName="TIẾP TỤC"
                />
            </div>
        </div>
    );
};

export default InfoFilm;
