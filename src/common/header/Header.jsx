import React from "react";
import "./Header.css";
import Head from "./Head";
import Search from "./Search";
import Navbar from "./Navbar";
import Breadcrumbs from "./BreadCrumbs";
const Header = ({ CartItem, addToCart, decreaseQty, FavItem, toggleFav }) => {
  return (
    <>
      <Head />
      <Search
        CartItem={CartItem}
        addToCart={addToCart}
        decreaseQty={decreaseQty}
        FavItem={FavItem}
        toggleFav={toggleFav}
      />
      <Navbar />
      <Breadcrumbs />
    </>
  );
};

export default Header;
