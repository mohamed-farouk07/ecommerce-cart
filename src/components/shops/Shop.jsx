import React from "react";
import ShopCart from "./ShopCart";
import "./style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import adidas from "../../components/assets/images/adidas.png";
import { Button } from "@mui/material";

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
    <div style={{ background: "#fff", width: "50%" }}><ShopCarousel /></div>
      
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

const ShopCarousel = () => {
  const list = [
    "./images/arrivals/arrivals1.png",
    "./images/arrivals/arrivals2.png",
    "./images/arrivals/arrivals3.png",
  ];

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
    <Carousel className="grid2"
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
      {list.map((item, i) => {
        return (
          <div key={`sc-${i}`} style={{ background: "#fff", height: 500 }}>
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              alt={"item carousel"}
              src={item}
              draggable={false}
            />
          </div>
        );
      })}
      
    </Carousel>
    
  );

};
