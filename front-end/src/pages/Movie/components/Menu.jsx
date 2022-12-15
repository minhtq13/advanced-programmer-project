import React from "react";
import { useEffect } from "react";
import "./Menu.scss";
import useFilm from "../../../hooks/useFilm";
import ButtonBuyTicket from "../../../component/ButtonBuyTicket/ButtonBuyTicket";
import AvatarFilm from "../../../component/AvatarFilm/AvatarFilm";

const Menu = ({ items }) => {
  const { infoFilm, getInfoFilmInFilmPage } = useFilm();
  useEffect(() => {
    if (infoFilm) {
      getInfoFilmInFilmPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="wrapper-movie-item">
      {items.map((item) => {
        const { id, title, img, vibe, time, date } = item;
        return (
          <div className="movie-item" key={id}>
            <AvatarFilm
              image={img}
              width={227.5}
              height={360}
              borderRadius={12}
            />
            <div className="info-movie">
              <div className="title-movie">{title}</div>
              <div className="desc-movie">
                <div className="vibe-movie detail">
                  <div className="options">Thể loại : </div>
                  <div className="info-vive">{vibe}</div>
                </div>
                <div className="time-movie detail">
                  <div className="options">Thời lượng :</div>
                  <div className="info-time">{time}</div>
                </div>
                <div className="date-movie detail">
                  <div className="options">Ngày khởi chiếu :</div>
                  <div className="info-date">{date}</div>
                </div>
              </div>
            </div>
            <div className="buy-ticket">
              <ButtonBuyTicket />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
