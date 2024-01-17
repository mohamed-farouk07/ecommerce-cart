import React from "react";
import ShopCart from "./ShopCart";
import "./style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
      <ShopCarousel />
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
  const list = [1, 2, 3, 4, 5, 6, 7, 8];

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
      >
        {item}
      </Button>
    );
  };

  return (
    <Carousel
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
          <div key={`sc-${i}`} style={{ background: "skyblue", height: 300 }}>
            Item {item}
          </div>
        );
      })}
    </Carousel>
  );
};
