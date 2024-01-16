import React, { useEffect, useLayoutEffect, useState } from "react";

import adidas from "../../components/assets/images/adidas.png";

const ShopCart = ({
  shopItems,
  cartItems,
  addToCart,
  remFromCart,
  FavItem,
  toggleFav,
}) => {
  return (
    <>
      {shopItems.map((item, index) => {
        return (
          <ShopItem
            key={`sci-${index}`}
            {...{ item, cartItems, addToCart, remFromCart, FavItem, toggleFav }}
          />
        );
      })}
    </>
  );
};

export default ShopCart;

const ShopItem = ({
  item,
  cartItems,
  addToCart,
  remFromCart,
  FavItem,
  toggleFav,
}) => {
  const [fav, setfav] = useState(false);
  const [cartCount, cartCounts] = useState(0);

  useLayoutEffect(() => {
    let ci = cartItems.find((o) => o.id === item.id);
    if (ci) {
      cartCounts(ci.qty);
    } else {
      cartCounts(0);
    }
  }, [cartItems, cartCounts, item]);

  useLayoutEffect(() => {
    let ci = FavItem.find((o) => o.id === item.id);
    if (ci) {
      setfav(true);
    } else {
      setfav(false);
    }
  }, [FavItem, setfav, item]);

  return (
    <div className="box">
      <div className="product mtop">
        <div className="img">
          <span className="discount">{item.discount}% Off</span>
          <img src={item.cover} alt="" />
          <div className="product-like">
            <label>{cartCount}</label> <br />
            <i
              className={fav ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              onClick={() => toggleFav(item)}
            ></i>
          </div>
        </div>
        <div className="product-details">
          <h3 style={{fontSize:"1.4rem", fontWeight:"bold",textAlign:"center"}}>{item.name}</h3>
          <div className="price">
            <h4 style={{color:"#542E90", fontSize:"1.2rem",textAlign:"start", padding:"auto 0"}}>${item.price}.00 </h4>
            <div className="logo width ">
            <img src={adidas} alt="" />
          </div>
          </div>
          <div className="rate">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <span style={{margin:"0 20px"}}>5 of 5</span>
          </div>
          <div className="price">
            <div style={{textAlign:"end"}}>
              <button onClick={() => addToCart(item)}>
                <i className="fa fa-plus"></i>
              </button>
              {/*  */}
              {cartCount > 0 && (
                <span disabled style={{ padding: "10px", fontSize: "1.2rem" }}>
                  {cartCount}
                </span>
              )}
              {cartCount > 0 && (
                <button onClick={() => remFromCart(item)}>
                  <i className="fa fa-minus"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
