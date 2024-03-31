import React, { useState } from "react";
import product from "../assets/img/product.png";
import ConfirmationModal from "./ConfirmationModal"; // Import the modal component
import { DeleteBtn } from "../assets/img/Icons";

const CartItems = () => {
  const [quantity, setQuantity] = useState(1);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false); // State to manage modal visibility

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  const handleDeleteItem = () => {
    if (quantity <= 0) {
      setIsConfirmationOpen(true); // Show confirmation modal
    } else {
      console.log("Item deleted from cart");
    }
  };

  const handleConfirmDeletion = () => {
    console.log("Item deleted from cart");
    setIsConfirmationOpen(false);
  };

  const totalPrice = (11.9 * quantity).toFixed(2);

  return (
    <div className="container">
      {/* Cart items table */}
      <div className="header">
        <h1 className="text-[30px] font-[700]">Your Cart Items</h1>
      </div>
      <span className="flex mt-2 bg-gray-400 w-full h-[2px]"></span>
      <div>
        <div className="table-header flex items-center justify-between bg-blue-500 px-14 py-3 mt-5">
          <span className="text-white">Product Image</span>
          <span className="text-white">Product Name</span>
          <span className="text-white">Stock Status</span>
          <span className="text-white">Qty</span>
          <span className="text-white">Price</span>
          <span className="text-white">Action</span>
          <span className="text-white">Checkout</span>
        </div>
        <div className="table-body">
          <div className="product flex items-center justify-between px-10 py-3">
            <div className="product-image flex justify-start">
              <img width={"150px"} src={product} alt="product" />
            </div>
            <div className="product-name flex justify-start">
              <span className="text-[15px]">
                Water and Wind Resistant cream
              </span>
            </div>
            <div className="product-status flex justify-start">
              <span className="p-2 flex items-center justify-center bg-blue-500 text-white rounded-md text-[12px]">
                In Stock
              </span>
            </div>
            <div className="product-qty flex justify-start">
              <input
                type="number"
                className="border rounded-md p-5 w-20"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>
            <div className="product-price flex justify-start">
              <span>{totalPrice}$</span>
            </div>
            <div className="product-action flex justify-start">
              {quantity > 0 && <DeleteBtn onClick={handleDeleteItem} />}
            </div>
            <div className="product-checkout flex justify-start">
              <button className="text-white px-8 py-4 bg-black">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="payment mt-10 flex flex-col gap-5">
        <div className="payment-details bg-gray-100 p-10 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <span className="text-[15px] font-[700]">Product</span>
            <span className="text-[15px] font-[700]">Total</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[15px] font-[700]">Shipping</span>
            <span className="text-[14px] font-[400]">Free Shipping</span>
          </div>
          <span className="flex mt-2 bg-gray-400 w-full h-[2px]"></span>
          <div className="flex items-center justify-between">
            <span className="text-[15px] font-[700]">Total</span>
            <span className="text-[14px] font-[400]">{totalPrice}$</span>
          </div>
        </div>
        <div className="actions flex gap-5">
          <button className="bg-blue-500 px-8 py-4 text-white">
            UPDATE CART
          </button>
          <button className="bg-blue-500 px-8 py-4 text-white">CHECKOUT</button>
        </div>
      </div>
      {/* Render ConfirmationModal component */}
      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onCancel={() => setIsConfirmationOpen(false)}
        onConfirm={handleConfirmDeletion}
      />
    </div>
  );
};

export default CartItems;
