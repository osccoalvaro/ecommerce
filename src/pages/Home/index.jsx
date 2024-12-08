import { useContext, useEffect, useState } from "react";
import Product from "~components/Product";
import Hero from "~containers/Hero";
import { ProductContext } from "~contexts/ProductContext";
import BrandSlider from "~components/BrandSlider";
import NewArrivals from "~components/NewArrivals";
import PromotionSection from "~components/PromotionSection";

const Home = () => {
  const { products } = useContext(ProductContext);

  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [allBrands, setAllBrands] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const [sortOrder, setSortOrder] = useState("asc");
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [isFiltersMenuOpen, setIsFiltersMenuOpen] = useState(false); // Estado para mostrar ambos filtros

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

  const sortedItems = [...items].sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });

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
            <div className="w-full md:w-1/4 md:mb-0">
              {/* Botones de filtros para móvil */}
              <div className="md:hidden flex">
              <button
  onClick={() => {
    setIsFiltersMenuOpen(!isFiltersMenuOpen);
    setIsSortMenuOpen(false); // Cierra el menú de Ordenar por
  }}
  className="py-5 px-4 bg-[#F8F9FA] text-base w-full flex items-center justify-center space-x-2"
>
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#3c4043"><path d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z"/></svg>
  <span>Filtros</span>
</button>

<button
  onClick={() => {
    setIsSortMenuOpen(!isSortMenuOpen);
    setIsFiltersMenuOpen(false); // Cierra el menú de Filtros
  }}
  className="py-5 px-4 bg-[#F8F9FA] text-base w-full flex items-center justify-center border-l border[#E9EAEC]border-solid"
>

  <span>Ordenar por</span>   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#3c4043"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
</button>

                
              </div>

              {/* Filtros en móviles */}
              <div className={`mb-8 ${isFiltersMenuOpen ? "block" : "hidden"} md:block`}>
                {/* Filtro por Categoría */}
          
                <div className="hidden md:flex items-center mb-4">  {/* Add the `flex` and `items-center` classes */}
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#3c4043"><path d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z"/></svg>

  <h4 className="text-lg font-bold  pl-3">Filtros</h4>
</div>



                <h4 className="text-2xl font-bold mb-4 mt-4">Categoría</h4>
                <div className="flex flex-col space-y-2">
                  {menuItems.map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600"
                        checked={selectedCategory === category}
                        onChange={() => filterByCategory(category)}
                      />
                      <span class="ml-4">{category}</span>
                    </label>
                  ))}
                </div>

                {/* Filtro por Marca */}
                <h4 className="text-2xl font-bold mt-6 mb-4">Marca</h4>
                <div className="flex flex-col space-y-2">
                  {allBrands.map((brand) => (
                    <label key={brand} className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600"
                        checked={selectedBrand === brand}
                        onChange={() => filterByBrand(brand)}
                      />
                      <span class="ml-4">{brand}</span>
                    </label>
                  ))}
                </div>
                <h4 className="text-2xl font-bold mt-6 mb-4">Stock</h4>

              </div>
            </div>


            {/* Productos y ordenamiento */}
            <div className="w-full md:w-3/4">
              {/* Solo botón de ordenamiento visible según el tamaño de pantalla */}
              <div className="flex justify-end items-center mb-4 relative">
                {/* Menú emergente en móvil */}
                {isSortMenuOpen && (
                  <div className="absolute top-0 left-0 right-0 bg-white shadow-md z-10 p-4 mt-50 rounded">
                    <div className="flex flex-col">
                      <button
                        onClick={() => {
                          setSortOrder("asc");
                          setIsSortMenuOpen(false);
                        }}
                        className="py-2 px-4 border-x border-t"
                      >
                        Menor precio
                      </button>
                      <button
                        onClick={() => {
                          setSortOrder("desc");
                          setIsSortMenuOpen(false);
                        }}
                        className="py-2 px-4 border-x border-y"
                      >
                        Mayor precio
                      </button>
                    </div>
                  </div>
                )}

                {/* Solo select para escritorio */}
                <div className="hidden md:block">
                  <label htmlFor="sortOrder" className="text-lg font-bold">
                    Ordenar por:
                  </label>
                  <select
                    id="sortOrder"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="py-2 px-1"
                  >
                    <option value="asc">menor precio</option>
                    <option value="desc">mayor precio</option>
                  </select>
                </div>
              </div>

              {/* Productos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]">
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
      <PromotionSection />
    </div>
  );
};

export default Home;
