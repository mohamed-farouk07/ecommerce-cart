import React from "react";
import { Link } from "react-router-dom";
import logo from "../../components/assets/images/logo.png";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <a href="./" className="logo width">
            <img src={logo} alt="" />
          </a>
          <div className="text-center mx-4">
            <span>Valentine’s Day Offers! Buy Two Get One Free</span>
          </div>
          <div className="navlink">
            {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
            <li className="font-weight-bold">
              <Link to="#">Shop Now</Link>
            </li>
          </div>
          <div className="right row RText">
            <label>
              {" "}
              <i className="fa fa-phone"></i>Contact Us
            </label>
            <label>
              {" "}
              <i className="fa fa-cart-shopping"></i>Track Order
            </label>
            <label>
              {" "}
              <i className="fa fa-location-dot"></i>Find Store
            </label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
