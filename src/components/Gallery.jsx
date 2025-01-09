import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Gallery() {
  return (
    <div className="gallery">
      <h2>갤러리</h2>
      <Swiper>
        <SwiperSlide>
          <img src="src\img\1.jpg" alt="웨딩 사진 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="\src\img\2.jpg" alt="웨딩 사진 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="\src\img\3.jpg" alt="웨딩 사진 3" />
        </SwiperSlide>
        {/* 추가 이미지 */}
      </Swiper>
    </div>
  );
}

export default Gallery;
