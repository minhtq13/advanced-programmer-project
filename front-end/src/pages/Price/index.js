import { WrapperStyled } from "./styled";
import PriceTicket from "../../asset/images/giave.jpg";
export default function Price() {
  return (
    <WrapperStyled>
      <div className="wrapper-price col-16">
        <div className="header-price">
          <div className="title">Giá vé rạp Beta</div>
        </div>
        <div className="img-price">
          <img src={PriceTicket} alt="" />
        </div>
      </div>
    </WrapperStyled>
  );
}
