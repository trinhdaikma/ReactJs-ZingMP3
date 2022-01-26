import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./style.scss";
import SwiperCore, {
  Autoplay,
  // EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/core";

SwiperCore.use([Autoplay, Pagination, Navigation]);
function Slider() {
  return (
    <div className="Slider_wrapper">
      <Swiper
        centeredSlides
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop
        loopFillGroupWithBlank
        navigation
        className="swiper"
      >
        <SwiperSlide>
          <img
            src="https://photo-zmp3.zadn.vn/banner/2/f/4/4/2f44754725fc1efce79d226a8970e16b.jpg"
            alt=""
            className="slider_img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://photo-zmp3.zadn.vn/banner/d/0/b/c/d0bcd26f15d489fb47f86ea33a8764c8.jpg"
            alt=""
            className="slider_img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://photo-zmp3.zadn.vn/banner/b/5/c/c/b5cccd621149341f856aa2c306d82ab3.jpg"
            alt=""
            className="slider_img"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
