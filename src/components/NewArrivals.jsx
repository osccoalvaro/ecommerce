import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { ProductContext } from "~contexts/ProductContext"; // Asegúrate de importar el contexto

import dell from "~assets/laptop.webp";

const NewArrivals = () => {
  const { products } = useContext(ProductContext); // Obtener los productos del contexto

  // Filtrar solo los productos nuevos (state === true)
  const newProducts = products.filter(product => product.state);

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
          {newProducts.map((product) => (
            <SwiperSlide key={product.id}>
                <Link
                  to={`/product/${product.id}`} // Asegúrate de que la ruta esté configurada en tu enrutador
                >
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
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.subtitle}</p>
                <p className="text-xl font-bold">S/{product.price}</p>

             
              
                
              </div>
              
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewArrivals;
