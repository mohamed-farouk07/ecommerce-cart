import React from "react";
import Home from "../components/MainPage/Home";
import TopCate from "../components/top/TopCate";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Discount from "../components/discount/Discount";
import Shop from "../components/shops/Shop";
import SlideCard from "../components/MainPage/SlideCard";
import SliderHome from "../components/MainPage/Slider";
import adidas from "../components/assets/images/adidas.png";

const Pages = ({
  productItems,
  addToCart,
  remFromCart,
  cartItems,
  shopItems,
  FavItem,
  toggleFav,
}) => {
  return (
    <>
      <NewArrivals />
      <Discount />
      {/* <SliderHome /> */}
      <Shop
        shopItems={shopItems}
        cartItems={cartItems}
        addToCart={addToCart}
        remFromCart={remFromCart}
        FavItem={FavItem}
        toggleFav={toggleFav}
      />
    </>
  );
};

export default Pages;
