import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import dell from "~assets/laptop.webp";
import msi from "~assets/msi.png";
import lenovo from "~assets/lenovo.png";
import hp from "~assets/laptop-lenovo.png";

const NewArrivals = () => {
  const products = [
    { id: 1, name: "Google Pixel Tablet", description: "Ayuda al alcance de tu mano", price: 399, image: dell },
    { id: 2, name: "Apple iPad Pro", description: "El futuro en tus manos", price: 899, image: dell },
    { id: 3, name: "Samsung Galaxy Tab S8", description: "Innovación en cada toque", price: 799, image: dell },
    { id: 4, name: "Lenovo Tab P11", description: "Ideal para el día a día", price: 299, image: dell },
    { id: 5, name: "Microsoft Surface Go", description: "Productividad al máximo", price: 599, image: dell },
  ];

  return (
    <section className="py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Nuevo ingreso</h2>
      <div className="max-w-screen-xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
          speed={10000}
          breakpoints={{
            640: { slidesPerView: 1 }, // Para pantallas pequeñas
            768: { slidesPerView: 2 }, // Para pantallas medianas
            1024: { slidesPerView: 4 }, // Para pantallas grandes
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative bg-white rounded-lg border p-6 text-center">
                {/* Decorativo amarillo */}
                <div className="absolute top-0 right-6 bg-[#F29900] text-white rounded-b-3xl px-1 py-2 flex items-center shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>               
                </div>
  
                {/* Contenido del producto */}
                <img src={product.image} alt={product.name} className="w-full rounded-md mb-4" />
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full inline-block mb-2">Nuevo</span>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                <p className="text-xl font-bold">S/{product.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
  
};

export default NewArrivals;
