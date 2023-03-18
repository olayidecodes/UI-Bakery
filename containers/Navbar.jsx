import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingCart, MdOutlineClose } from 'react-icons/md'
import { BsSuitHeart } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { RiMenu4Fill } from 'react-icons/ri'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav>
      <div className='app__navbar-upper'>
        <div className="app__navbar-upper-box">
          <p>CURRENCY <MdOutlineKeyboardArrowDown /></p>
          <p>LANGUAGE <MdOutlineKeyboardArrowDown /></p>
        </div>

        <div className="app__navbar-upper-logo">
          <h1>Bakery</h1>
          <p>University of Ibadan</p>
        </div>

        <div className="app__navbar-upper-icons">
          <ul>
            <li><a><IoSearchOutline /></a></li>
            <li><a><BsSuitHeart /></a></li>
            <li><a><MdOutlineShoppingCart /></a></li>
            <li><a><FiSettings /></a></li>
          </ul>
          
        </div>
        
        <RiMenu4Fill className='menu' onClick={() => setToggle(!toggle)}/>
        
      </div>

      {/* <div className="app__navbar-lower">
        <ul className='app__navbar-lower-links'>
          <li><a href="">FURNITURE <MdOutlineKeyboardArrowDown /></a></li>
          <li><a href="">DINING</a></li>
          <li><a href="">LINEN & DECOR</a></li>
          <li><a href="">ACCESSORIES <MdOutlineKeyboardArrowDown /></a></li>
          <li><a href="">MORE <MdOutlineKeyboardArrowDown /></a></li>
        </ul>
      </div> */}

        {
          
          toggle && (
            <div className="toggle__menu">
              <div className="app__navbar-upper-box">

                <div className="dropdown">
                  <p>CURRENCY <MdOutlineKeyboardArrowDown /></p>
                  <p>LANGUAGE <MdOutlineKeyboardArrowDown /></p>
                </div>

                <ul>
                  <li><a><IoSearchOutline /></a></li>
                  <li><a><BsSuitHeart /></a></li>
                  <li><a><MdOutlineShoppingCart /></a></li>
                  <li><a><FiSettings /></a></li>
                </ul>

              </div>

                
              {/* <ul className='app__navbar-lower-links'>
                  <li><a href="">FURNITURE <MdOutlineKeyboardArrowDown /></a></li>
                  <li><a href="">DINING</a></li>
                  <li><a href="">LINEN & DECOR</a></li>
                  <li><a href="">ACCESSORIES <MdOutlineKeyboardArrowDown /></a></li>
                  <li><a href="">MORE <MdOutlineKeyboardArrowDown /></a></li>
                </ul> */}

            </div>
          )
        }
    </nav>
  )
}

export default Navbar