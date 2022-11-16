import React from 'react'
import "./banner.css";
const banner = () => {
  return (
    <div>
      <div class="banner">
        <div class="banner-container">
            <div class="banner-content">
                <h2 class="banner-content__heading animation-fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms" title="" ><span class="span-tt">Chúng Tôi</span> Luôn Đem Lòng Tin Đến Mọi Nhà</h2>
                <p class="banner-content__para animation-fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms" title="" >Đã có mặt tại các xã trên địa bàn tỉnh Hà Nội</p>
                <a href="#" data-toggle="modal" data-target="#myModal" class="btn btn-green btn-animation animation-fadeInUp" title="" data-wow-delay="0.5s" data-wow-duration="1500ms" >Đăng ký dùng thử</a>
            </div>
            <div class="banner-img animation-fadeInUp" data-wow-delay="0.5s" data-wow-duration="1500ms" >
                <img src="/image/counter.png" class="" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default banner