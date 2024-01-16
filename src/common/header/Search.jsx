import React, { useEffect, useState } from "react";
import adidas from "../../components/assets/images/adidas.png";
import { Badge, Drawer, IconButton, Paper, Stack } from "@mui/material";
import Cart from "../Cart/Cart";

const Search = ({ CartItem, addToCart, decreaseQty, FavItem, toggleFav }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  const [drawerOpen, setdrawerOpen] = useState(false);
  const [cc, scc] = useState(0);

  useEffect(() => {
    let c = 0;
    for (let o of CartItem) c += o.qty;
    scc(c);
  }, [scc, CartItem]);
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="search-box f_flex w-50">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search" />
            {/* <i className='fa fa-shopping-bag'></i> */}
          </div>

          <div className="logo width ">
            <img src={adidas} alt="" />
          </div>

          <Stack direction={"row"} spacing={2} sx={{ width: "auto" }}>
            <IconButton
              size="large"
              sx={{ p: 2 }}
              onClick={() => setdrawerOpen(true)}
            >
              <Badge badgeContent={cc} color="primary">
                <i className="fa fa-shopping-bag " />
              </Badge>
            </IconButton>

            <IconButton size="large" sx={{ p: 2 }}>
              <Badge badgeContent={FavItem.length} color="primary">
                <i className="fa fa-heart " />
              </Badge>
            </IconButton>

            <IconButton size="large" sx={{ p: 2 }}>
              <i className="fa fa-user" />
            </IconButton>
          </Stack>
        </div>
      </section>

      <CartDrawer
        open={drawerOpen}
        onClose={() => {
          setdrawerOpen(false);
        }}
        {...{ CartItem, addToCart, decreaseQty, FavItem, toggleFav }}
      />
    </>
  );
};

export default Search;

const CartDrawer = ({
  open,
  onClose,
  CartItem,
  addToCart,
  decreaseQty,
  FavItem,
  toggleFav,
}) => {
  return (
    <Drawer open={open} onClose={onClose} sx={{ width: 500 }} anchor="right">
      <Paper>
        <Cart
          {...{
            CartItem,
            addToCart,
            decreaseQty,
            FavItem,
            toggleFav,
          }}
        />
      </Paper>
    </Drawer>
  );
};
