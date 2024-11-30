import { useContext, useEffect, useState } from "react";
import Product from "~components/Product";
import Hero from "~containers/Hero";
import { ProductContext } from "~contexts/ProductContext";

const Home = () => {
  const { products } = useContext(ProductContext);

  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [allBrands, setAllBrands] = useState([]);

  useEffect(() => {
    setItems(products);
  }, [products]);

  const menuItems = [...new Set(products.map((item) => item.category))];

  const filterByCategory = (category) => {
    setSelectedCategory((prevCategory) => {
      const newCategory = prevCategory === category ? null : category;
      if (newCategory !== prevCategory) {
        setSelectedBrand(null);
      }
      return newCategory;
    });
  };

  const filterByBrand = (brand) => {
    setSelectedBrand((prevBrand) => (prevBrand === brand ? null : brand));
  };

  useEffect(() => {
    let filteredItems = products;

    if (selectedCategory) {
      filteredItems = filteredItems.filter(
        (item) => item.category === selectedCategory
      );
    }

    if (selectedBrand) {
      filteredItems = filteredItems.filter((item) => item.marca === selectedBrand);
    }

    setItems(filteredItems);
  }, [selectedCategory, selectedBrand, products]);

  useEffect(() => {
    if (selectedCategory) {
      const brands = [
        ...new Set(
          products
            .filter((item) => item.category === selectedCategory)
            .map((item) => item.marca)
        ),
      ];
      setAllBrands(brands);
    } else {
      const brands = [...new Set(products.map((item) => item.marca))];
      setAllBrands(brands);
    }
  }, [selectedCategory, products]);

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* Filtros */}
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              {/* Filtro por Categorías */}
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Filtrar por Categoría</h4>
                <div className="hidden md:flex flex-col space-y-4">
                  {menuItems.map((category) => (
                    <button
                      key={category}
                      className={`py-2 px-4 rounded ${
                        selectedCategory === category
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={() => filterByCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                {/* Combo box para móviles */}
                <div className="block md:hidden">
                  <select
                    className="w-full border rounded py-2 px-4"
                    value={selectedCategory || ""}
                    onChange={(e) =>
                      filterByCategory(e.target.value || null)
                    }
                  >
                    <option value="">Todas las Categorías</option>
                    {menuItems.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Filtro por Marcas */}
              <div>
                <h4 className="text-xl font-bold mb-4">Filtrar por Marca</h4>
                <div className="hidden md:flex flex-col space-y-4">
                  {allBrands.map((brand) => (
                    <button
                      key={brand}
                      className={`py-2 px-4 rounded ${
                        selectedBrand === brand
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={() => filterByBrand(brand)}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
                {/* Combo box para móviles */}
                <div className="block md:hidden">
                  <select
                    className="w-full border rounded py-2 px-4"
                    value={selectedBrand || ""}
                    onChange={(e) =>
                      filterByBrand(e.target.value || null)
                    }
                  >
                    <option value="">Todas las Marcas</option>
                    {allBrands.map((brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Productos */}
            <div className="w-full md:w-3/4">
              <div
                className="
                grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]
                "
              >
                {items.map((product) => (
                  <Product product={product} key={product.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
