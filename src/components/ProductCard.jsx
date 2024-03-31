import React from "react";
import productImage from "../assets/img/product.png";
import { Currency } from "../assets/img/Icons";

const ProductCard = ({ addToCart }) => {
  const handleClick = () => {
    addToCart();
    console.log("Product added to cart");
  };

  return (
    <div className="card flex flex-col">
      <div className="card-body">
        <img src={productImage} alt="product" />
      </div>
      <div className="card-footer flex flex-col gap-3 bg-blue-500 pt-5 px-5 pb-6">
        <span className="max-w-[210px] text-[16px] font-[600]">
          All Natural Makeup Beauty Cosmetics
        </span>
        <div className="flex gap-2">
          <Currency />
          <Currency />
          <Currency />
          <Currency />
          <Currency />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[18px] font-[700]">11.9$</span>
          <button
            className="add flex items-center justify-center bg-blue-400 w-12 h-12 rounded-full p-3 text-white transition-all duration-300 hover:bg-blue-800 active:bg-white active:text-black"
            onClick={handleClick}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
