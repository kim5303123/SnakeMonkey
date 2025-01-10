import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Gallery() {
  const images = [
    { src: "/img/1.jpg", alt: "웨딩 사진 1" },
    { src: "/img/2.jpg", alt: "웨딩 사진 2" },
    { src: "/img/3.jpg", alt: "웨딩 사진 3" },
  ];

  return (
    <div className="gallery">
      <h2>갤러리</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Gallery;
