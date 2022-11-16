import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cinemas from "../pages/Cinemas";
import Member from "../pages/Member";
import Movie from "../pages/Movie";
import Price from "../pages/Price";
import Schedule from "../pages/Schedule";
import Footer from "../layout/footer/footer";
import Nav from "../layout/Nav";
import HomePage from "../pages/homepage/Homepage";
export default function Home() {
    return (
        <>
            <Router>
                <Route path="/" component={Nav} />
                {/* <Route path="/" component={HomePage} /> */}
                <Route path="/home" component={HomePage} />
                <Route path="/price" component={Price} />
                <Route path="/schedule" component={Schedule} />
                <Route path="/movie" component={Movie} />
                <Route path="/cinemas" component={Cinemas} />
                <Route path="/menber" component={Member} />
                {/* <Route path="/" exact component={Welcome} />
        <Route path="/login" exact component={DangNhap} />
        <Route path="/registration" exact component={Registration} /> */}

                {/* cho admin */}

                {/* <Route path="/nav/admin/home" exact component={Homepage} />
        <Route path="/nav/admin/bangsp" exact component={BangSp} />
        <Route path="/nav/admin/dktiemchung" exact component={DKTiemChung} />
        <Route path="/nav/admin/chart1" exact component={Chart1} />
        <Route path="/nav/admin/test" exact component={Test} />
        <Route path="/nav/admin/chart2" exact component={Chart2} />
        <Route path="/nav/admin/peopledata" exact component={PeopleData} /> */}

                {/* cho nhân viên */}
                {/* <Route path="/nav/staff" component={NavForStaff} />
        <Route path="/nav/staff/home" component={HomepageChoNhanVien} />
        <Route path="/nav/staff/data-product-staff" component={SanPhamChoNhanVien} />
        <Route path="/nav/staff/data-customer" component={ThongTinKhachHangChoNhanVien} />
        <Route path="/nav/staff/data-staff" component={ThongTinNhanVienChoNhanVien} />
        <Route path="/nav/staff/statisics" component={ThongKe} />
        <Route path="/nav/staff/data-vaccination" component={DuLieuTiemChung} />
        <Route path="/nav/staff/receipt" component={HoaDon} /> */}

                {/* cho khách hàng */}
                {/* <Route path="/nav/customer" component={NavForCustomer} />
        <Route path="/nav/customer/home" component={HomepageChoKhachHang} />
        <Route
          path="/nav/customer/data-product-customer"
          exact
          component={SanPhamChoKhachHang}
        />
        <Route path="/nav/customer/data-customer" component={ThongTinKhachHang} />
        <Route path="/nav/customer/dang-ki-tiem-chung" component={DangKiTiemChung} /> */}
            </Router>
            <Footer />
        </>
    );
}
