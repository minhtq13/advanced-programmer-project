import Nav from "./Nav";
import Footer from "./footer/footer";

function DefaultLayout({ children }) {
  return (
    <div>
      <Nav />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
