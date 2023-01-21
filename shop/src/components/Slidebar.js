import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

export default () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='slider'
      >
        <SwiperSlide className='swiper-slide'>
          <img src='./images1/11.jpg' alt='React Image' />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src='./images1/12.jpg' alt='React Image' />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src='./images1/13.png' alt='React Image' />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src='./images1/14.jpg' alt='React Image' />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src='./images1/15.jpg' alt='React Image' />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
