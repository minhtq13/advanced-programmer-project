import { WrapperStyled } from "./styled";
import PriceTicket from "../../asset/images/giave.jpg";
export default function Price() {
    return (
        <WrapperStyled>
            <div className="wrapper-price col-16">
                <div>
                    <div className="header-price">
                        <div className="title">GIÁ VÉ RẠP BETA</div>
                    </div>
                    <div className="img-price">
                        <img src={PriceTicket} alt="" />
                    </div>
                </div>
            </div>
        </WrapperStyled>
    );
}
