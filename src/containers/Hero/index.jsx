import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Importación ajustada

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ManImg from "~assets/slider1.webp";
import LaptopImg2 from "~assets/slider2.jpg";
import LaptopImg3 from "~assets/slider3.jpg";

const Hero = () => {
  // Array de imágenes para el slider
  const images = [ManImg, LaptopImg2, LaptopImg3];

  return (
    <section className="bg-amber-400 ">
        <Swiper 
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <img
                className="h-full object-cover"
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
     
    </section>
  );
};

export default Hero;
