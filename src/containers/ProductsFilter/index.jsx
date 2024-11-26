import { useState } from "react";
import FilterButton from "~components/FilterButton";
import { FILTER_ALL } from "~/constants"; 
import { v4 } from "uuid";

const ProductsFilter = ({ setItems, menuItems, filterItems, products }) => {
  const idGenerator = v4;
  const filterAll = FILTER_ALL;
  const [selectedCategory, setSelectedCategory] = useState(filterAll);

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div
      className="
                flex justify-center flex-wrap gap-4 md:gap-10 mb-12
                font-primary
                "
    >
      <FilterButton
        onClick={() => {
          setItems(products), handleFilter("Todos");
        }}
        content="Todos"
        icon="/todos.png" // Icono para "Todos"
        selectedCategory={selectedCategory}
      />
      {menuItems.map((item) => {
        // Buscar el icono en los productos
        const product = products.find(product => product.category === item);
        const icon = product ? product.icon : null;

        return (
          <FilterButton
            onClick={() => {
              filterItems(item), handleFilter(item);
            }}
            key={idGenerator()}
            content={item}
            icon={icon} // Pasar el icono del producto
            selectedCategory={selectedCategory}
          />
        );
      })}
    </div>
  );
};

export default ProductsFilter;
