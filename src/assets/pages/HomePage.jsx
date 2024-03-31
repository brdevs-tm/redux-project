import React, { Fragment, useState } from "react";
import Header from "../../components/Header";
import Services from "../../components/Services";
import ProductCard from "../../components/ProductCard";

const HomePage = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <Fragment>
      <Header cartCount={cartCount} />
      <main>
        <div className="containerown flex flex-col gap-10">
          <Services />
          <div className="products-row flex items-center justify-between">
            <ProductCard addToCart={addToCart} />
            <ProductCard addToCart={addToCart} />
            <ProductCard addToCart={addToCart} />
            <ProductCard addToCart={addToCart} />
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default HomePage;
