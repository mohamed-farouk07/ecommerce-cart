import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header d_flex'>
        <div className='container d_flex'>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to='/'>Men</Link>
              </li>
              <li>
                <Link to='/'>Women</Link>
              </li>
              <li>
                <Link to='/'>Unisex</Link>
              </li>
              <li>
                <Link to='/'>Kids</Link>
              </li>
              <li>
                <Link to='/'>Best Sellers</Link>
              </li>
              <li>
                <Link to='/'>New Arrivals</Link>
              </li>
              <li>
                <Link to='/'>Offers</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
