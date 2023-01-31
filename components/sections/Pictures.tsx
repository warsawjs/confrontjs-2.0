import React from "react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

/* just for demonstration purpose */
import pic1 from "../../public/89.jpg";
import pic2 from "../../public/91.jpg";

const styles = {
  "--swiper-navigation-color": "#A64AC9",
  "--swiper-pagination-color": "#A64AC9",
  "--swiper-navigation-size": "30px",
} as { [key: string]: string };

export default function Testimonials() {
  return (
    <div className="flex-col items-center justify-center py-40 lg:px-40 lg:px-38">
      <Swiper
        style={styles}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-full h-[80vh] flex items-center"
      >
        <SwiperSlide className="h-[80vh] flex items-center justify-center">
          <Image
            src={pic1}
            alt="picture"
            style={{
              objectFit: "cover",
            }}
          />
        </SwiperSlide>

        <SwiperSlide className="h-[80vh] flex items-center justify-center">
          <Image
            src={pic2}
            alt="picture"
            style={{
              objectFit: "cover",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
