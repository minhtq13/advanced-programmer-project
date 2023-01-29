import "./DefaultLayout.scss";
import Nav from "./Nav";
import Footer from "./footer/footer";

function DefaultLayout({ children }) {
    return (
        <div className="wrapper-default-layout">
            <Nav />
            <div className="container-content">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
