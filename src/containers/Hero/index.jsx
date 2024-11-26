import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Imágenes para escritorio
import ManImg from "~assets/slider1.webp";
import LaptopImg2 from "~assets/slider2.jpg";
import LaptopImg3 from "~assets/slider3.jpg";

// Imágenes para móvil
import ManImgMovil from "~assets/slider1-movil.webp";
import LaptopImg2Movil from "~assets/slider2-movil.webp";
import LaptopImg3Movil from "~assets/slider3-movil.webp";

import { useState, useEffect } from "react";

const Hero = () => {
  // Estado para las imágenes del slider
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Función para detectar si es móvil
    const updateImages = () => {
      if (window.innerWidth <= 768) {
        // Si el ancho es menor o igual a 768px, usa las imágenes móviles
        setImages([ManImgMovil, LaptopImg2Movil, LaptopImg3Movil]);
      } else {
        // Usa las imágenes de escritorio para pantallas más grandes
        setImages([ManImg, LaptopImg2, LaptopImg3]);
      }
    };

    // Detectar el ancho inicial
    updateImages();

    // Añade un event listener para detectar cambios en el tamaño de la pantalla
    window.addEventListener("resize", updateImages);

    // Limpia el event listener al desmontar el componente
    return () => window.removeEventListener("resize", updateImages);
  }, []);

  return (
    <section className="bg-amber-400">
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
