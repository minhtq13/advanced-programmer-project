import {
  ClockCircleOutlined,
  FieldTimeOutlined,
  FundProjectionScreenOutlined,
  MenuUnfoldOutlined,
  PicCenterOutlined,
  ScheduleOutlined,
  TagsOutlined,
} from "@ant-design/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom/dist";
import AvatarFilm from "../../../component/AvatarFilm/AvatarFilm";
import ButtonConfirm from "../../../component/ButtonConfirm/ButtonConfirm";
import { setStep } from "../../../redux/slices/appSlice";
import { convertNameCinema, getRandomInt } from "../../../utils/tools";
import "./InfoFilm.scss";

const InfoFilm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const currentCinema = location?.pathname.split("/")[1];
  const { step } = useSelector((state) => state.appReducer);
  const { chooseChair, fieldFilm, timeItemInMovieChair } = useSelector(
    (state) => state.appReducer
  );

  const handleDone = () => {
    navigate("/");
    window.location.reload();
    setStep(0);
  };
  const handleBack = () => {
    dispatch(setStep(0));
  };

  const handleOk = () => {
    dispatch(setStep(1));
  };
  return (
    <div className="wrapper-info-film">
      <div className="row1">
        {fieldFilm.film ? (
          <AvatarFilm image={fieldFilm.film.img} width={150} height={237} />
        ) : (
          ""
        )}

        <div className="name-animation">
          <div className="name">{fieldFilm?.film?.name}</div>
          <div className="animation">{fieldFilm?.animation} Phụ đề</div>
        </div>
      </div>
      <div className="row2">
        <div className="wrapper-item">
          <div className="info">
            <TagsOutlined /> Thể loại
          </div>
          <div className="detail">{fieldFilm?.film?.category}</div>
        </div>
        <div className="wrapper-item">
          <div className="info">
            <ClockCircleOutlined /> Thời lượng
          </div>
          <div className="detail">{fieldFilm?.film?.duration} phút</div>
        </div>
      </div>
      <div className="row3">
        <div className="wrapper-item">
          <div className="info">
            <MenuUnfoldOutlined /> Rạp chiếu
          </div>
          <div className="detail">{convertNameCinema(currentCinema)}</div>
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
        {step === 0 ? (
          <ButtonConfirm
            handleDisabled={chooseChair.length > 0 ? false : true}
            handleClickConfirm={handleOk}
            buttonName="TIẾP TỤC"
          />
        ) : (
          <div className="block-button">
            <ButtonConfirm
              buttonName={"Back"}
              handleClickConfirm={handleBack}
            />

            <ButtonConfirm
              buttonName={"Done"}
              handleClickConfirm={handleDone}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoFilm;
