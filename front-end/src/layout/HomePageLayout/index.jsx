import "./HomePageLayout.scss";
import Nav from "../DefaultLayout/Nav";
import Footer from "../DefaultLayout/footer/footer";

function HomePageLayout({ children }) {
    return (
        <div className="wrapper-home-page-layout">
            <Nav />
            <div className="container-content-home-page">{children}</div>
            <div className="line-footer"></div>
            <Footer />
        </div>
    );
}

export default HomePageLayout;
