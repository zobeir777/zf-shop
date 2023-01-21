import React from "react";
import { Data } from "../data";
import { useSelector, useDispatch } from "react-redux";
import formatCurrency from "../util";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./off.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

const Off = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        dir='ltr'
        modules={[EffectCards]}
        className='off'
      >
        {Data.map((item, index) => (
          //console.log(item),
          <SwiperSlide key={item.id}>
            <img src={item.images[0]} alt='' />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Off;
