import { useContext, useEffect, useState } from "react";
import Product from "~components/Product";
import Hero from "~containers/Hero";
import { ProductContext } from "~contexts/ProductContext";
import BrandSlider from "~components/BrandSlider";
import NewArrivals from "~components/NewArrivals";

const Home = () => {
  const { products } = useContext(ProductContext);

  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [allBrands, setAllBrands] = useState([]);

  // Estado para la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Estado para ordenamiento
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" para ascendente, "desc" para descendente

  useEffect(() => {
    setItems(products);
  }, [products]);

  const menuItems = [...new Set(products.map((item) => item.category))];

  const filterByCategory = (category) => {
    setSelectedCategory((prevCategory) => {
      const newCategory = prevCategory === category ? null : category;
      if (newCategory !== prevCategory) {
        setSelectedBrand(null);
        setCurrentPage(1);
      }
      return newCategory;
    });
  };

  const filterByBrand = (brand) => {
    setSelectedBrand((prevBrand) => (prevBrand === brand ? null : brand));
    setCurrentPage(1);
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
    setCurrentPage(1);
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

  // Ordenar productos
  const sortedItems = [...items].sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });

  // Cálculo de productos visibles
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div>
      <Hero />
      <BrandSlider />
      <NewArrivals />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* Filtros */}
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
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

            {/* Productos y ordenamiento */}
            <div className="w-full md:w-3/4">
              {/* Controles de ordenamiento */}
              <div className="flex justify-end items-center mb-4">
                <label htmlFor="sortOrder" className="mr-2 text-lg font-semibold">
                  Ordenar por:
                </label>
                <select
                  id="sortOrder"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="py-2 px-4 border rounded"
                >
                  <option value="asc">Menor precio</option>
                  <option value="desc">Mayor precio</option>
                </select>
              </div>

              {/* Productos */}
              <div
                className="
                grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]
                "
              >
                {currentItems.map((product) => (
                  <Product product={product} key={product.id} />
                ))}
              </div>

              {/* Paginación */}
              <div className="flex justify-center items-center space-x-4 mt-8">
                <button
                  className="py-2 px-4 rounded bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100"
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                >
                  Anterior
                </button>
                <span className="font-bold">
                  Página {currentPage} de {totalPages}
                </span>
                <button
                  className="py-2 px-4 rounded bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
