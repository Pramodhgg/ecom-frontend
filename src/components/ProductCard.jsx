import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import ProductViewModal from "./ProductViewModal";

const ProductCard = ({ item }) => {
  const {
    productId,
    productName,
    image,
    description,
    quantity,
    price,
    discount,
    specialPrice,
  } = item;

  const [openProductViewModal, setOpenProductViewModal] = useState(false);
  const btnLoader = false;
  const [selectedViewProduct, setSelectedViewProduct] = useState({});
  const isAvailable = quantity && Number(quantity) > 0;

  const handleProductView = (product) => {
    setSelectedViewProduct(product);
    setOpenProductViewModal(!openProductViewModal);
  };

  return (
    <div className="border rounded-lg shadow-xl overflow-hidden transition-shadow duration-300">
      <div
        className="w-full overflow-hidden aspect-3/2"
        onClick={() => {
          handleProductView(item);
        }}
      >
        <img
          className="w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-105"
          src={image}
          alt={productName}
        ></img>
      </div>
      <div className="p-4">
        <h2
          onClick={() => {
            handleProductView(item);
          }}
          className="text-lg font-semibold mb-2 cursor-pointer"
        >
          {productName}
        </h2>
        <div className="min-h-20 max-h-20 ">
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <div className="flex justify-between">
          {specialPrice ? (
            <div className="flex flex-col">
              <span className="text-gray-400 line-through">
                ${Number(price).toFixed(2)}
              </span>
              <span className="text-lg font-bold text-slate-700">
                ${Number(price).toFixed(2)}
              </span>
            </div>
          ) : (
            <div>
              <span className="text-lg font-bold text-slate-700">
                ${Number(price).toFixed(2)}
              </span>
            </div>
          )}
          <button
            disabled={!isAvailable || btnLoader}
            onClick={() => {}}
            className={`bg-blue-500 ${isAvailable ? "opacity-100 hover:bg-blue-600:opacity-90 cursor-pointer" : "opacity-50 cursor-not-allowed"}
             text-white py-2 px-4 rounded-lg transition-opacity duration-300 w-36 flex items-center justify-center`}
          >
            <FaCartShopping className="mr-2" />
            {isAvailable ? "Add to cart" : "Out of stock"}
          </button>
        </div>
      </div>
      <ProductViewModal
        open={openProductViewModal}
        setOpen={setOpenProductViewModal}
        product={selectedViewProduct}
        isAvailable={isAvailable}
      />
    </div>
  );
};
export default ProductCard;
