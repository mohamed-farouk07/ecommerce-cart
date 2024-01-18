import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Data from "./components/Data";
import Cart from "./common/Cart/Cart";
import Footer from "./common/footer/Footer";
import Sdata from "./components/shops/Sdata";
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  /*
  step1 :  const { productItems } = Data 
  using props
  
  Step 2 : item cart using useState
  ==> CartItem lai pass garre using props from  <Cart CartItem={CartItem} /> import in cartItem
 
  Step 3 : flashCard button

  Step 4 :  addToCart pass using props in pages and cart components
  */

  //Step 1 :
  const { productItems } = Data;
  const { shopItems } = Sdata;

  //Step 2 :
  const [CartItem, setCartItem] = useState([]);
  const [FavItem, setFavItem] = useState([]);

  //Step 4 :
  const addToCart = (product) => {
    // if product already cart
    const productExit = CartItem.find((item) => item.id === product.id);
    // if productExit already exit in cart then will run fun() => setCartItem
    // any inside => setCartItem will run => map() each cart
    // productExit product chai display garxa
    // ani increase  exits product QTY by 1
    // if item and product doesnt match then will add new items
    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      // but if the product doesnt exit in the cart that mean if card is empty
      // then new product is added in cart  and its qty is initalize to 1
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };
  // Stpe: 6
  const decreaseQty = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = CartItem.find((item) => item.id === product.id);

    // if product is exit and its qty is 1 then we will run a fun  setCartItem
    // inside  setCartItem we will run filter to check if item.id is match to product.id
    // if the item.id is doesnt match to product.id then that items are display in cart
    // else
    if (productExit.qty === 1) {
      let arr = [...CartItem.filter((item) => item.id !== productExit.id)];
      setCartItem(arr);
    } else {
      // if product is exit and qty  of that produt is not equal to 1
      // then will run function call setCartItem
      // inside setCartItem we will run map method
      // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  const toggleFav = (product) => {
    let arr = [...FavItem];
    const i = arr.findIndex((o) => o.id === product.id);
    if (i > -1) {
      arr.splice(i, 1);
    } else {
      arr.push(product);
    }
    setFavItem(arr);
  };

  return (
    <>
      <HashRouter>
        <Header
          CartItem={CartItem}
          addToCart={addToCart}
          decreaseQty={decreaseQty}
          FavItem={FavItem}
          toggleFav={toggleFav}
        />
        <Switch>
          <Route path="/" exact>
            <Pages
              productItems={productItems}
              cartItems={CartItem}
              addToCart={addToCart}
              remFromCart={decreaseQty}
              shopItems={shopItems}
              FavItem={FavItem}
              toggleFav={toggleFav}
            />
          </Route>
          <Route path="/cart" exact>
            <Cart
              CartItem={CartItem}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
              FavItem={FavItem}
              toggleFav={toggleFav}
            />
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
