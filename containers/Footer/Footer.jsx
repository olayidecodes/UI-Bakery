import Image from 'next/image'
import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import { images } from '../../constants'

const Footer = () => {
  return (
    <div className='app__wrapper app__footer'>
      <div className="picture-box">
        <h3>NEW CATALOG</h3>
        <div className="image">
          <Image src={images.product1} className= "footer_image"/>
        </div>
        <div className="text">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores magnam cupiditate quam itaque adipisci.</p>
          <hr />
          <span>Download Catalog</span>
          <span>Explore Catalog</span>
          <span><FaArrowLeft />< FaArrowRight/></span>
        </div>
      </div>

      <div className="links-box">
        <h3>WANT TO PURCHASE OUR THEME?</h3>
        <hr />
        <div className="links">
          <div className="extras">
            <h3>EXTRAS</h3>
            <ul>
              <li>Brands</li>
              <li>Specials</li>
              <li>Site Map</li>
              <li>Contact Us</li>
              <li>My Account</li>
            </ul>
          </div>

          <div className="information">
            <h3>INFORMATION</h3>
            <ul>
              <li>Brands</li>
              <li>Specials</li>
              <li>Site Map</li>
              <li>Contact Us</li>
              <li>My Account</li>
            </ul>
          </div>

          <div className="contact">
            <h3>CONTACT US</h3>
            <ul>
              <li>Webzeel Services, A.103, Shivalik Plaza, Nc Kapodra-Uttran-Bridge, Surat, Gujarat 340103</li>
              <li>098765.43210</li>
              <li>mini@templatetrip.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer