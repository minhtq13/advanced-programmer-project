import React from "react";
import "./Cinemas.scss";
import BTBacGiang from "../../asset/images/btbg.jpg";

import { dataHotFilm } from "./data";

const Cinemas = () => {
  return (
    <div className="cinemas-component">
      <div className="left-panel col-6">
        <div className="cinema-name">Beta Thanh Xuân</div>
        <div className="cinema-img">
          <img src={BTBacGiang} alt="" />
        </div>
        <div className="cinema-desc">
          <div className="paragraph1 paragraph">
            Chính thức mở cửa đón các tín đồ điện ảnh vào 9/12/2016, rạp Beta
            Cinemas Thanh Xuân toạ lạc tại Tầng hầm B1, toà nhà Golden West, số
            2 Lê Văn Thiêm, Nhân Chính, Thanh Xuân, Hà Nội.
          </div>
          <div className="paragraph2 paragraph">
            Beta Cinemas Thanh Xuân sở hữu tổng cộng 6 phòng chiếu tương đương
            838 ghế ngồi. Rạp được trang bị hệ thống màn chiếu, máy chiếu, phòng
            chiếu hiện đại với 100% nhập khẩu từ nước ngoài. Trong mỗi phòng
            chiếu đều được lắp đặt hệ thống âm thanh Dolby 7.1 và hệ thống cách
            âm chuẩn quốc tế. Vì vậy mà mỗi thước phim được chiếu tại rạp đều là
            những thước phim rõ nét nhất, với âm thanh và hiệu ứng sống động
            nhất. Mức giá xem phim tại rạp hết sức ưu đãi
            <span> chỉ từ 40.000 VNĐ</span>. Mỗi tuần, rạp còn có những chương
            trình khuyến mại, ưu đãi đặc biệt dành cho các tín đồ điện ảnh.
          </div>
          <div className="paragraph3 paragraph">
            Với địa điểm thuận lợi, cơ sở vật chất hiện đại, tiên tiến, mức giá
            ưu đãi, Beta Cinemas Thanh Xuân chắc chắn sẽ là địa điểm xem-ăn-chơi
            không thể bỏ qua của giới trẻ Hà Thành.
          </div>
          <div className="paragraph4 paragraph">
            Thông tin liên hệ Rạp Beta Cinemas Thanh Xuân
          </div>
        </div>
        <div className="cinema-footer">
          <div className="address">
            Địa chỉ: Tầng hầm B1, tòa nhà Golden West, Số 2 Lê Văn Thiêm, Nhân
            Chính, Thanh Xuân, Hà Nội (cách đường Lê Văn Lương 80m, đối diện số
            56 Lê Văn Thiêm)
          </div>
          <div className="phone">
            Điện thoại: <span> 0824 812 878 </span>
          </div>
          <div className="sale">
            Mua phiếu quà tặng, mua vé số lượng lớn, đặt phòng chiếu tổ chức hội
            nghị, trưng bày quảng cáo:
            <span className="sale1"> Liên hệ hotline -</span>
            <span className="sale2"> 0824 812 878 </span>
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
                <img src={film.img} alt="" />
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
