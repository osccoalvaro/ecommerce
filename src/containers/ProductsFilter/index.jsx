import { useState } from "react";
import FilterButton from "~components/FilterButton";
import { FILTER_ALL } from "~/constants";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const ProductsFilter = ({ setItems, menuItems, filterItems, products }) => {
  const filterAll = FILTER_ALL;
  const [selectedCategory, setSelectedCategory] = useState(filterAll);

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="w-full font-primary">
      {/* Swiper para pantallas móviles */}
      <Swiper
        spaceBetween={10} // Espacio entre botones
        slidesPerView={4} // Muestra 4 botones a la vez
        breakpoints={{
          640: { slidesPerView: 6 }, // Ajustar según el ancho de pantalla
          480: { slidesPerView: 4.5 },
          320: { slidesPerView: 3.5 },
        }}
        className="md:hidden" // Ocultar en pantallas grandes
      >
        <SwiperSlide>
          <FilterButton
            onClick={() => {
              setItems(products), handleFilter("Todos");
            }}
            content="Todos"
            icon="/todos.png"
            selectedCategory={selectedCategory}
          />
        </SwiperSlide>
        {menuItems.map((item) => {
          const product = products.find((product) => product.category === item);
          const icon = product ? product.icon : null;

          return (
            <SwiperSlide key={item}>
              <FilterButton
                onClick={() => {
                  filterItems(item), handleFilter(item);
                }}
                content={item}
                icon={icon}
                selectedCategory={selectedCategory}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Layout estándar para pantallas más grandes */}
      <div
        className="
          hidden md:flex 
          justify-center flex-wrap gap-4 md:gap-10 mb-12
        "
      >
        <FilterButton
          onClick={() => {
            setItems(products), handleFilter("Todos");
          }}
          content="Todos"
          icon="/todos.png"
          selectedCategory={selectedCategory}
        />
        {menuItems.map((item) => {
          const product = products.find((product) => product.category === item);
          const icon = product ? product.icon : null;

          return (
            <FilterButton
              onClick={() => {
                filterItems(item), handleFilter(item);
              }}
              key={item}
              content={item}
              icon={icon}
              selectedCategory={selectedCategory}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsFilter;
