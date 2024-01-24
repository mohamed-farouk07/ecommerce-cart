import React, { useLayoutEffect, useState } from "react";
import ShopCart from "./ShopCart";
import "./style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import adidas from "../../components/assets/images/adidas.png";
import { Button, Grid } from "@mui/material";
import adidas from "../../components/assets/images/adidas.png";

const Shop = ({
  cartItems,
  addToCart,
  remFromCart,
  shopItems,
  FavItem,
  toggleFav,
}) => {
  const [item, itemS] = useState(null);

  return (
    <>
      {item && (
        <div style={{ background: "#fff", width: "100%" }}>
          <ShopCarousel
            item={item}
            cartItems={cartItems}
            addToCart={addToCart}
            remFromCart={remFromCart}
            shopItems={shopItems}
            FavItem={FavItem}
            toggleFav={toggleFav}
          />
        </div>
      )}

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
                onItemSelect={(item) => {
                  itemS(item);
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;

const ShopCarousel = ({
  item,
  cartItems,
  addToCart,
  remFromCart,
  FavItem,
  toggleFav,
  onItemSelect,
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

  var list = item?.media ?? [item.cover];

  const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    const item = React.Children.toArray(list)[index];

    return (
      <Button
        variant={active ? "contained" : "outlined"}
        onClick={() => onClick()}
        sx={{ width: 100, height: 100, mx: 1 }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          alt={"item carousel"}
          src={item}
          draggable={false}
        />
      </Button>
    );
  };

  return (
    <Grid container>
      <Grid item xs={6}>
        <Carousel
          className="grid2"
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={{
            all: {
              breakpoint: { max: 999999, min: 0 },
              items: 1,
            },
          }}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={10000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          renderDotsOutside={true}
          renderButtonGroupOutside={true}
          dotListClass="position-static"
          customDot={<CustomDot />}
        >
          {list.map((val, i) => {
            return (
              <div key={`sc-${i}`} style={{ background: "#fff", height: 500 }}>
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  alt={"item carousel"}
                  src={val}
                  draggable={false}
                />
              </div>
            );
          })}
        </Carousel>
      </Grid>
      <Grid item xs={6}>
        <div
          className="product-details"
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "1.4rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {item.name}
          </h3>
          <div className="price">
            <h4
              style={{
                color: "#542E90",
                fontSize: "1.2rem",
                padding: "auto 0",
              }}
            >
              ${item.price}.00{" "}
            </h4>
          </div>
          <div className="logo width ">
            <img src={adidas} alt="" />
          </div>
          <div className="rate">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <span style={{ margin: "0 20px" }}>5 of 5</span>
          </div>
          <div className="price">
            <div style={{}}>
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
      </Grid>
    </Grid>
  );
};
