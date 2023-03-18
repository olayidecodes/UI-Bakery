import Image from 'next/image'
import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

import { images } from '../constants'

const Footer = () => {
  return (
    <div className='app__wrapper app__footer'>
      <div className="app__footer_box">
        <div className="picture-box">
          <h3>NEW CATALOG</h3>
          <div className="image-box">
            <div className="image">
              <Image src={images.product1}/>
            </div>
            <div className="text">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores magnam.</p>
              <hr />
              <span className='first'>Download Catalog</span>
              <span>Explore Catalog</span>
              <p className='box-icons'>
                <FaArrowLeft className='box-icon'/>
                <FaArrowRight className='box-icon'/>
              </p>
              </div>
          </div>
        </div>

        <div className="links-box">
          <div className="header">
            <h3>WANT TO PURCHASE OUR THEME?</h3>
            <button>PURCHASE NOW</button>
          </div>
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
                <li><IoLocationSharp className='contact-icon'/>Webzeel Services, A.103, Shivalik<br />Plaza, Nc Kapodra-Uttran-Bridge,<br />Surat, Gujarat 340103</li>
                <li><BsFillTelephoneFill className='contact-icon'/>098765.43210</li>
                <li><MdEmail className='contact-icon'/>mini@templatetrip.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer