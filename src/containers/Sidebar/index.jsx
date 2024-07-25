import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "~components/CartItem";
import { SidebarContext } from "~contexts/SidebarContext";
import { CartContext } from "~contexts/CartContext";
import { useContext } from "react";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  const handleWhatsAppMessage = () => {
    const phoneNumber = '51997567217'; // Reemplaza con el número de teléfono de la empresa
    const productList = cart.map(item => {
      return `• ${item.title} (S/ ${item.price}) https://ecommerce-alk.pages.dev/product/${item.id}`;
    }).join('\n'); // \n es el carácter de salto de línea
    
    const message = `Hola, estoy interesado en los siguientes productos:\n${productList}\n\nTotal: S/ ${total}`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, '_blank');
  };

  


  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] 
    transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Carrito ({itemAmount})
        </div>
        <div
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
          onClick={handleClose}
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div
        className="
        flex flex-col gap-y-2 
        h-[320px] lg:h-[380px]
        overflow-y-auto overflow-x-hidden border-b
                  "
      >
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase text-semibold">
            <span className="mr-2">Total:</span>S/ {total}
          </div>
          <div
            className="
                      cursor-pointer py-4 bg-red-500 text-white w-12 h-12 
                      flex justify-center items-center text-xl
                      "
            onClick={clearCart}
          >
            <FiTrash2 />
          </div>
        </div>

        <button
          onClick={handleWhatsAppMessage}
          className="bg-primary flex p-4 justify-center items-center text-white w-full font-medium"
        >
          Continuar compra
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
