import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

import dell from "~assets/dell.png";
import msi from "~assets/msi.png";
import lenovo from "~assets/lenovo.png";
import hp from "~assets/hp.png";


const brands = [
  { id: 1, name: "Dell", logo: dell },
  { id: 2, name: "MSI", logo: msi },
  { id: 3, name: "Lenovo", logo: lenovo },
  { id: 4, name: "HP", logo: hp },
];

const BrandSlider = () => {
  // Duplicamos las marcas para que haya suficientes elementos para el scroll infinito
  const duplicatedBrands = [...brands, ...brands];  // Duplicamos el array de marcas
  
  return (
    <div className="my-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={6}  // Por defecto, mostramos 5 en desktop
          spaceBetween={50}  // Espacio entre las marcas
          autoplay={{ delay: 3000 }}
          loop={true}  // Habilitar el scroll infinito
          speed={1000}  // Tiempo en ms para la transición de los slides
          effect="slide"  // Tipo de transición (puedes usar "fade", "slide", etc.)
          breakpoints={{
            320: { slidesPerView: 2 }, // En pantallas pequeñas (móviles) mostramos 2
            640: { slidesPerView: 3 }, // En pantallas medianas (tablets) mostramos 3
            1024: { slidesPerView: 6 }, // En pantallas grandes mostramos 5
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center bg-white shadow-md rounded-lg p-4 my-4 border-solid border border-gray-100">
                <img src={brand.logo} alt={brand.name} className="h-11 object-contain" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BrandSlider;
