import React from 'react'
import "./benefit.css"
const benefit = () => {
  return (
    <div>
       <div id="benefit" class="benefit">
        <h2 class="benefit-heading" data-wow-delay="0.1s" data-wow-duration="1500ms">Lợi ích khi đăng kí tiêm chủng tại BK-Vacine</h2>
    
        <p class="benefit-para " data-wow-delay="0.3s" data-wow-duration="1500ms" >Hãy để chúng tôi đồng hành cùng thành công của bạn</p>
    
        <div class="benefit-container">
                <div class="benefit-list " data-wow-delay="0.1s" data-wow-duration="1500ms">
                    <div class="benefit-item hover-transform">
                        <a href="#">
                            <img src="/image/icon-1.png" alt="Đầy đủ quy trình nghiệp vụ" />
                            <h3>Đầy đủ quy trình nghiệp vụ</h3>
                            <p>Đáp ứng đầy đủ quy trình tiêm của cơ sở, giảm thiểu thao tác người dùng</p>
                        </a>
                    </div>
                    <div class="benefit-item hover-transform ">
                        <a href="#">
                            <img src="/image/icon-2.png" alt="Quản lý và phân quyền" />
                            <h3>Quản lý và phân quyền</h3>
                            <p>Quản lý và phân quyền chi tiết theo vai trò từng bộ phận, giúp cơ sở hoạt động hiệu quả</p>
                        </a>
                    </div>
                    <div class="benefit-item hover-transform ">
                        <a href="#">
                            <img src="/image/icon-3.png" alt="Dễ dàng mở rộng" />
                            <h3>Dễ dàng mở rộng</h3>
                            <p>Dễ dàng mở rộng các dịch vụ kết nối (thanh toán, Hóa đơn điện tử, SMS…)</p>
                        </a>
                    </div>
                    <div class="benefit-item hover-transform ">
                        <a href="#">
                            <img src="/image/icon-4.png" alt="Báo cáo thống kê" />
                            <h3>Báo cáo thống kê</h3>
                            <p>Tổng hợp đầy đủ các báo cáo doanh thu, kho... theo thời gian thực</p>
                        </a>
                    </div>
                    <div class="benefit-item hover-transform ">
                        <a href="#">
                            <img src="/image/icon-5.png" alt="Nền tảng Cloud" />
                            <h3>Nền tảng Cloud</h3>
                            <p class="d-none d-lg-block">Nền tảng Cloud an toàn, bảo mật, khả năng mở rộng nhanh chóng, không mất phí cài đặt, bảo trì</p>
                            <p class="d-block d-lg-none">Nền tảng Cloud an toàn, bảo mật, không mất phí cài đặt, bảo trì</p>
                        </a>
                    </div>
                    <div class="benefit-item hover-transform ">
                        <a href="#">
                            <img src="/image/icon-6.png" alt="Tối ưu hóa chi phí" />
                            <h3>Tối ưu hóa chi phí</h3>
                            <p>Tối ưu hóa chi phí đầu tư, triển khai nhanh chóng tại cơ sở mới</p>
                        </a>
                    </div>
                </div>
        </div>
        <div class="ct-img " data-wow-delay="0.5s" data-wow-duration="1500ms">
            <img src="/image/benefit.png" class="img-benefit " alt="Lợi ích của Phần mềm tiêm chủng SMED" />
        </div>
        </div>
    </div>
  )
}

export default benefit