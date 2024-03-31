import React from "react";
import { Cargo, Currency } from "../assets/img/Icons";

const Services = () => {
  return (
    <div className="bg-blue-700 flex items-center justify-between px-10 py-[45px]">
      <div className="flex items-center gap-4">
        <Currency />
        <div>
          <span className="text-white">Free Shipping</span>
          <p className="text-white gap-1">On all orders over $75.00</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Currency />
        <div>
          <span className="text-white">Free Returns</span>
          <p className="text-white gap-1">Returns are free within 9 days</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Currency />
        <div>
          <span className="text-white">100% Payment Secure</span>
          <p className="text-white gap-1">Your payment are safe with us.</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Currency />
        <div>
          <span className="text-white">Support 24/7</span>
          <p className="text-white gap-1">Contact us 24 hours a day</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
