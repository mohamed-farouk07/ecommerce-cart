import React from "react";
import "./style.css";
import logo2 from "../../components/assets/images/logo-2.png";
import facebook from "../../components/assets/images/facebook.png";
import linkedin from "../../components/assets/images/linkedin.png";
import instagram from "../../components/assets/images/instagram.png";
import twitter from "../../components/assets/images/twitter.png";
import cod from "../../components/assets/images/cod.png";
import visa from "../../components/assets/images/visa.png";
import masterCard from "../../components/assets/images/master-card.png";
import nasnav from "../../components/assets/images/nasnav.png";

const Footer = () => {
  return (
    <>
      <footer>
        
        <div className="container grid2">
          <div className="box">
            <img src={logo2} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed dia m nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut
              aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
              in hendrerit in vulputate velit esse molestie consequat, vel illum
              dolore eu feugiat nulla facilisis at vero eros et accumsan et
              iusto odio dignissim qui blandit
            </p>
          </div>

          <div className="box">
            <ul style={{ margin: "40px 0" }}>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Track Order</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Sell With Us</li>
              <li>Shipping And Returns</li>
            </ul>
          </div>
          <div className="media">
            <ul style={{ margin: "40px 0" }}>
              <li>
                <img src={facebook} alt="" />
                /YESHTERY
              </li>
              <li>
                <img src={linkedin} alt="" />
                /YESHTERY
              </li>
              <li>
                <img src={instagram} alt="" />
                /YESHTERY
              </li>
              <li>
                <img src={twitter} alt="" />
                /YESHTERY
              </li>
            </ul>
          </div>
        </div>

        <hr></hr>

        <div className="container grid2" style={{margin:"10px 0"}}>
          <div className="box">
            <p>© 2021 yeshtery, all rights reserved.</p>
          </div>

          <div className="pay">
            <img src={cod} alt="" />
            <img src={visa} alt="" />
            <img src={masterCard} alt="" />
          </div>

          <div >
            <p style={{display:"inline", margin:"0 15px"}}>Powered By</p>
            <img src={nasnav} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
