import React from 'react'
import Image from 'next/image'
import { images } from '../constants'
import { FaRegEye, FaRegComments } from 'react-icons/fa'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const News = () => {
  return (
    <div className='app__wrapper'>
      <div className='app__wrapper_item app__news'>
        <h2>LATEST NEWS</h2>
        <p>Bestselling Items In This Season</p>
        <hr />
        
        <div className="app__news-box">
          <Image src={images.lower1} className = 'image'/>
          
          <div className="text">
            <span>10<p>/ JANUARY</p></span>
            <h3>VOLUPTATE VELIT ESSE</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sequi tenetur, provident aut ab praesentium.</p>
            <div className="interactions">
              <span>
                <FaRegEye />
                <p>Views</p>
                <p>(14)</p>
              </span>
              <span>
                <FaRegComments />
                <p>Comments</p>
              </span>
            </div>
          </div>
          <Image src={images.lower3} className = 'image'/>
          
          <div className="text">
            <span>10<p>/ JANUARY</p></span>
            <h3>VOLUPTATE VELIT ESSE</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sequi tenetur, provident aut ab praesentium.</p>
            <div className="interactions">
              <span>
                <FaRegEye />
                <p>Views</p>
                <p>(14)</p>
              </span>
              <span>
                <FaRegComments />
                <p>Comments</p>
              </span>
            </div>
          </div>
          <Image src={images.lower2} className = 'image'/>
          
          <div className="text">
            <span>10<p>/ JANUARY</p></span>
            <h3>VOLUPTATE VELIT ESSE</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sequi tenetur, provident aut ab praesentium.</p>
            <div className="interactions">
              <span>
                <FaRegEye />
                <p>Views</p>
                <p>(14)</p>
              </span>
              <span>
                <FaRegComments />
                <p>Comments</p>
              </span>
            </div>
          </div>
        </div>

        <div className="list-carousel">
          <ul>
            <li><FaArrowLeft />PREV</li>
            <li>NEXT<FaArrowRight /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default News