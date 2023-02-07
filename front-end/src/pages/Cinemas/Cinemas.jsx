import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AvatarFilm from "../../component/AvatarFilm/AvatarFilm";
import useCinema from "../../hooks/useCinema";
import { convertNameCinema } from "../../utils/tools";
import "./Cinemas.scss";
import { dataHotFilm } from "./data";

const Cinemas = () => {
  const location = useLocation();
  const currentCinema = location?.pathname.split("/")[1];
  const { infoCinema, getInfoCinema } = useCinema();

  useEffect(() => {
    getInfoCinema({
      name: convertNameCinema(currentCinema),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCinema]);

  return (
    <div className="cinemas-component">
      <div className="left-panel col-6">
        <div className="cinema-name">{infoCinema?.name}</div>
        <div className="cinema-img">
          {infoCinema ? (
            <AvatarFilm image={infoCinema.img} width={533} height={343} />
          ) : (
            <img src="" alt="Ảnh rạp" />
          )}
        </div>
        <div className="cinema-desc">
          <div className="paragraph">{infoCinema?.description}</div>
          <div className="paragraph4 paragraph">
            Thông tin liên hệ Rạp {infoCinema?.name}
          </div>
        </div>
        <div className="cinema-footer">
          <div className="address">{infoCinema?.address}</div>
          <div className="phone">
            Điện thoại: <span> {infoCinema?.phoneNumber} </span>
          </div>
          <div className="sale">
            Mua phiếu quà tặng, mua vé số lượng lớn, đặt phòng chiếu tổ chức hội
            nghị, trưng bày quảng cáo:
            <span className="sale1"> Liên hệ hotline -</span>
            <span className="sale2"> {infoCinema?.phoneNumber} </span>
            để được hưởng ưu đãi tốt nhất bạn nhé!
          </div>
        </div>
      </div>
      <div className="right-panel col-6">
        <div className="title">PHIM ĐANG HOT</div>
        <div className="film">
          {dataHotFilm.map((film, index) => {
            return (
              <div key={index} className="film-item col-6">
                <img
                  src={film.img}
                  alt=""
                  style={{
                    width: "237px",
                    height: "384px",
                    borderRadius: "20px",
                  }}
                />
                <div className="film-name">{film.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cinemas;
