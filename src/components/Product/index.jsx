import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiPlusSmall, HiEye } from "react-icons/hi2";
import { CartContext } from "~contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price } = product;

  return (
    <div className="group">
      {/* Contenedor con borde que incluye solo imagen y botones */}
      <div className="relative border border-[#e4e4e4] h-[300px] overflow-hidden">
        <Link
          to={`/product/${id}`}
          className="block w-full h-full"
        >
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
      </Link >
    </div>
  );
};

export default Product;
