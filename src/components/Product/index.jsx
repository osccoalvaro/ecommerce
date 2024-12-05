import { useContext } from "react";
import { Link } from "react-router-dom";
import { HiPlusSmall, HiEye } from "react-icons/hi2";
import { CartContext } from "~contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price, state } = product; // Asegúrate de que "state" esté disponible en el objeto "product"

  return (
    <div className="group">
      {/* Contenedor con borde que incluye solo imagen, etiqueta y botones */}
{/* Contenedor con borde que incluye solo imagen y botones */}
<div className="relative border border-[#e4e4e4] h-[300px] overflow-hidden">
  <Link to={`/product/${id}`} className="block w-full h-full">
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[200px] mx-auto flex justify-center items-center">
        <img
          className="max-h-[160px] group-hover:scale-110 transition-transform duration-300"
          src={image}
          alt=""
        />
      </div>
    </div>
  </Link>

  {/* Mostrar etiqueta "Nuevo" si el producto tiene state === true */}
  {product.state && (
    <>
    <span
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
    >
      Nuevo
    </span>
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
    </>
  )}

  {/* Botones flotantes */}
  <div
    className="
      absolute top-6 -right-11 group-hover:right-5 p-2 
      flex flex-col items-center justify-center 
      gap-y-2 opacity-0 group-hover:opacity-100
      transition-all duration-300
    "
  >
    <button
      onClick={(e) => {
        e.stopPropagation();
        addToCart(product, id);
      }}
    >
      <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
        <HiPlusSmall className="text-3xl" />
      </div>
    </button>
    <Link
      className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
      to={`/product/${id}`}
    >
      <HiEye />
    </Link>
  </div>
</div>


      {/* Detalles del producto (fuera del borde) */}
      <Link to={`/product/${id}`}>
        <div className="pt-4">
          <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
          <h2 className="font-semibold mb-1">{title}</h2>
          <h2 className="font-semibold">S/ {price}</h2>
        </div>
      </Link>
    </div>
  );
};

export default Product;
