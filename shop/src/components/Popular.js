import { Data } from "../data";
import { useSelector, useDispatch } from "react-redux";
import formatCurrency from "../util";
import React, { useRef, useState } from "react";
import SwiperCore, { Virtual, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./popular.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// install Virtual module
SwiperCore.use([Virtual, Navigation]);

const Popular = () => {
  const cart = useSelector((store) => store);
  console.log(cart);
  const dispatch = useDispatch();
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 6 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, "Slide " + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <>
      <h2 className='popular-title'>پر فروش ها</h2>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        centeredSlides={false}
        spaceBetween={4}
        pagination={{
          type: "fraction",
        }}
        //modules={[Autoplay]}
        className='populary'
        navigation={true}
        virtual
      >
        {Data.map(
          (item, index) => (
            console.log(item),
            (
              <SwiperSlide key={item.id}>
                <div className='product'>
                  <div className='product-item' key={item.id}>
                    <img src={item.images} alt='' />
                  </div>
                  <div className='product-item-text'>
                    <div className='product-item-info'>
                      <h4>{item.title}</h4>
                      <h5>{formatCurrency(item.price)}</h5>
                    </div>
                    <div className='add-to-cart'>
                      <button
                        onClick={() =>
                          dispatch({ type: "SHOW", payload: item })
                        }
                      >
                        افزودن به سبد خرید
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          )
        )}
      </Swiper>
    </>
  );
};

export default Popular;
