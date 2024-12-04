import React from "react";
import BannerLaptop from "~assets/banner-laptop.webp"; // Importa la imagen

const PromotionSection = () => {
  return (
    <section className="relative bg-gray-50 py-12 mt-11">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
        {/* Columna de texto */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Encuentra tu <span className="text-blue-500">perfecta</span> Chromebook
          </h1>
          <p className="mt-4 text-gray-600 text-lg md:text-xl">
            Si buscas una computadora que sea rápida, segura e inteligente, lo encontrarás todo en tu próxima Chromebook.
          </p>
          <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-md shadow hover:bg-blue-600">
            Descubra los productos
          </button>
        </div>

        {/* Columna de la imagen */}
        <div className="relative flex justify-center">
          <img
            src={BannerLaptop}
            alt="Chromebook"
            className="relative max-w-full h-auto -mt-8 md:-mt-20 lg:-mt-28 z-10"
          />
        </div>
      </div>

      {/* Fondo decorativo para hacer la sección más llamativa */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 -z-10"></div>
    </section>
  );
};

export default PromotionSection;
