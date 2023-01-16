import Nav from "./Nav";
import Footer from "./footer/footer";
import "./DefaultLayout.scss";

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
