import React from "react";
import ShopCart from "./ShopCart";
import "./style.css";

const Shop = ({
  cartItems,
  addToCart,
  remFromCart,
  shopItems,
  FavItem,
  toggleFav,
}) => {
  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row f_flex">
                <h2>Mobile Phones</h2>
              </div>
              <div className="heading-right row ">
                <span>View all</span>
                <i className="fa-solid fa-caret-right"></i>
              </div>
            </div>
            <div className="product-content grid1">
              <ShopCart
                cartItems={cartItems}
                addToCart={addToCart}
                remFromCart={remFromCart}
                shopItems={shopItems}
                FavItem={FavItem}
                toggleFav={toggleFav}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
