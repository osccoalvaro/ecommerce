import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

import dell from "~assets/dell3.png";
import msi from "~assets/msi3.png";
import lenovo from "~assets/lenovo3.png";
import hp from "~assets/hp3.png";


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
            320: { slidesPerView: 3,
              spaceBetween: 10
            }, // En pantallas pequeñas (móviles) mostramos 2
            640: { slidesPerView: 3 }, // En pantallas medianas (tablets) mostramos 3
            1024: { slidesPerView: 6 }, // En pantallas grandes mostramos 5
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center bg-[#F8F9FA] rounded-lg my-4 p-2 md:p-6">
                <img src={brand.logo} alt={brand.name} className="h-12 object-contain" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BrandSlider;
