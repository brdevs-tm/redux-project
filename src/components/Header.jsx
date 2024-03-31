import React, { useState } from "react";
import {
  Call,
  Cart,
  Currency,
  Instagram,
  Like,
  Search,
  Shuffle,
  Twitter,
  Youtube,
} from "../assets/img/Icons";

import Logo from "../assets/img/logo.png";

const Header = ({ cartCount }) => {
  return (
    <div>
      <header className="">
        <section className="bg-black py-4">
          <div className="containerown flex items-center justify-between">
            <div className="bar-left flex gap-16">
              <div className="socials flex items-center gap-[30px]">
                <Twitter />
                <Youtube />
                <Instagram />
              </div>
              <div className="flex items-center gap-3">
                <Call />
                <span className="text-white text-[14px] text-400 font-medium">
                  (+123)4567890
                </span>
              </div>
            </div>
            <div className="bar-right flex items-center gap-5">
              <div className="currency-type flex items-center gap-1">
                <span className="text-white">USD$</span>
                <Currency />
              </div>
              <div className="page-lang flex items-center gap-1">
                <span className="text-white">English</span>
                <Currency />
              </div>
            </div>
          </div>
        </section>
        <nav className="containerown flex justify-between py-7">
          <div className="nav-left">
            <a href="#">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <div className="nav-right flex items-center gap-[30px]">
            <div className="relative">
              <Search />
              <span className="absolute top-[-18px] right-[-5px] rounded-md bg-blue-600 text-[12px] text-white p-1"></span>
            </div>
            <div className="relative">
              <Shuffle />
              <span className="absolute top-[-18px] right-[-5px] rounded-md bg-blue-600 text-[12px] text-white p-1"></span>
            </div>
            <div className="relative">
              <Like />
              <span className="absolute top-[-18px] right-[-5px] rounded-md bg-blue-600 text-[12px] text-white p-1"></span>
            </div>
            <div className="relative">
              <Cart />
              {cartCount > 0 && (
                <span className="absolute top-[-18px] right-[-5px] rounded-md bg-blue-600 text-[12px] text-white p-1">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
