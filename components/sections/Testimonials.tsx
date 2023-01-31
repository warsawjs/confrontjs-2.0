import React, { useState, useEffect } from "react";
import data from "../../data/data.json";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const styles = {
  "--swiper-navigation-color": "#A64AC9",
  "--swiper-pagination-color": "#A64AC9",
  "--swiper-navigation-size": "30px",
} as { [key: string]: string };

export default function Testimonials() {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 1024) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleResize() {
    if (window.innerWidth < 768) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 1270) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
  }

  return (
    <div className="flex-col items-center justify-center py-40 lg:px-40 lg:px-38">
      <div className="flex flex-col text-center items-center gap-5">
        <h1 className="font-bold text-xl lg:text-4xl">TESTIMONIALS</h1>
        <p className="w-[306px] lg:w-[750px] text-xs lg:text-base">
          Dor ohur. Speras mikrong jepogt. Tångar nasam an. Emstat jyde. Are
          benar. Udås tåbel stenoligt. Märk-dna bida, polyrad. Lyssna in
          utsmarta. Söjojysk. Mikrons ultrang: om än sad. Ressade bek antitism.
          Sofav telenilig. Matilda Gustavsson n
        </p>
      </div>
      <Swiper
        style={styles}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={slidesPerView}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        onSwiper={(swiper) => swiper.slideNext}
      >
        {data.Testimonials.map((testimony) => {
          return (
            <SwiperSlide>
              <div className="w-full flex justify-center my-20">
                <div className="w-[185px] h-[235px] lg:w-[280px] lg:h-[300px] flex flex-col justify-center text-center p-8 lg:p-14 bg-white rounded-3xl shadow-2xl shadow-primary">
                  <h3 className="font-bold text-[10px] lg:text-sm text-primary">
                    {testimony.name}
                  </h3>
                  <p className="text-[8px] lg:text-xs">{testimony.position}</p>
                  <p className="font-medium text-[8px] lg:text-xs pt-4">
                    {testimony.comment}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
