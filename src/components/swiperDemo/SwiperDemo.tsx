// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation]);

export const SwiperDemo = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        breakpoints={{
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation={{
          nextEl: "#next",
          prevEl: "#prev",
        }}
        pagination={{
          clickable: true,
          bulletClass:
            "w-2.5 h-2.5 bg-gray-200 block rounded-full cursor-pointer",
          bulletActiveClass: "bg-pink-400",
          el: "#pagination",
        }}
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides
        loop
      >
        <SwiperSlide>すわいぱー1</SwiperSlide>
        <SwiperSlide>すわいぱー2</SwiperSlide>
        <SwiperSlide>すわいぱー3</SwiperSlide>
        <SwiperSlide>すわいぱー4</SwiperSlide>
        <SwiperSlide>すわいぱー5</SwiperSlide>
        <SwiperSlide>すわいぱー6</SwiperSlide>
      </Swiper>
    </div>
  );
};
