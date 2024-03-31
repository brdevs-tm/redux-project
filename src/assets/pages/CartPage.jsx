import React, { Fragment } from "react";
import Header from "../../components/Header";
import CartItems from "../../components/CartItems";

const CartPage = () => {
  return (
    <Fragment>
      <Header />
      <CartItems />
    </Fragment>
  );
};

export default CartPage;
