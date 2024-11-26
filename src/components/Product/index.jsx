import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiPlusSmall, HiEye } from "react-icons/hi2";
import { CartContext } from "~contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price } = product;

  return (
    <div className="relative group transition">
      <Link
        to={`/product/${id}`}
        className="block border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition"
      >
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
      </Link>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icon-tabler-shopping-cart-plus"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
              <path d="M12.5 17h-6.5v-14h-2" />
              <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5" />
              <path d="M16 19h6" />
              <path d="M19 16v6" />
            </svg>
          </div>
        </button>
        <Link
          className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          to={`/product/${id}`}
        >
          <HiEye />
        </Link>
      </div>
      <Link to={`/product/${id}`} className="block">
        <div>
          <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
          <h2 className="font-semibold mb-1">{title}</h2>
          <h2 className="font-semibold">S/ {price}</h2>
        </div>
      </Link>
    </div>
  );
};

export default Product;
