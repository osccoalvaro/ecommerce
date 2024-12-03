import React from "react"; // Asegúrate de importar React

import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "~contexts/CartContext";
import { ProductContext } from "~contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }
  const { title, price, description, image } = product;

  const whatsappNumber = "51987654321"; // Reemplaza con tu número de WhatsApp
  const whatsappMessage = `Hola, estoy interesado en el producto ${title}. ¿Podrías brindarme más información?`;

  return (
    <section className="pt-32 pb-12 lg:py-32 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:h-screen">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="
                        max-w-[150px] md:max-w-[200px] lg:max-w-sm 
                        max-h-[250px] lg:max-h-sm
                        "
              src={image}
              alt={description}
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1
              className="
                        first-letter text-xl lg:text-[26px] 
                        font-medium  mb-4 max-w-[450px] mx-auto lg:mx-0
                        "
            >
              {title}
            </h1>
            <div className="text-base md:text-lg lg:text-xl text-red-500 font-medium mb-6">
              S/ {price}
            </div>
            

            <p className="mb-8 text-sm">
              {description.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>

            <div className="flex flex-col md:flex-row items-center gap-4">
  <button
    className="bg-primary py-4 px-8 text-white text-base md:mr-10"
    onClick={() => addToCart(product, product.id)}
  >
    Agregar al carrito
  </button>
  <a
    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 pr-8 pl-16 py-3 text-white text-base flex items-center gap-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 relative"
  >
    <div className="absolute -left-6">
      <img
        src="/img/avatar4.jpg" // Ruta del avatar
        alt="Asesor Comercial"
        className="h-20 rounded-full border-2 border-white shadow-md"
      />
    </div>
    <div className="flex flex-col">
      <span className="font-semibold text-sm">
        Asesor Comercial 
        <span className="bg-white text-green-500 rounded-full text-xs px-2 py-[2px] ml-1">
          Online
        </span>
      </span>
      <span className="text-sm font-medium">Información vía WhatsApp</span>
    </div>
  </a>
</div>



        
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
