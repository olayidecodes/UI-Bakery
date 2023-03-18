import React from 'react'
import { data } from '../constants'
import Image from 'next/image'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'


const Product = ({product: {image, name, price, oldprice, rating}}) => {
  
  return (
    <div className='app__product'>
      <div className="app__product-image">
        { image &&
          (<Image src={image} 
            alt = "Product Image" 
            width="280" 
            height= "350"
            className='image'/> )
        }
      
      </div>
      <div className="app__product-info">
        <div className='product__rating'>
          {
              Array(rating).fill().map((_) => (
                  <p>⭐</p>
              ))
          }
        </div>
        <p className="product__name">{name}</p>
        <div className="product__price">
          <p className="product__present-price">{price}</p>
          <p className="product__old-price">{oldprice}</p>
        </div>
      </div>
    </div>
  )
}

const Products = () => {
  return (
    <div className='app__wrapper'>
      <div className='app__productslisting app__wrapper_item'>
        <div className='app__productslisting-header'>
          <h2>AVAILABLE PRODUCTS</h2>
          <p>Bestselling Pastries</p>
          <hr />
          <ul className='app__productslisting-header-links'>
            <li><a activeclassName="active" href="">FEATURED</a></li>
            <li><a activeclassName="active" href="">LATEST</a></li>
            <li><a activeclassName="active" href="">BESTSELLER</a></li>
          </ul>
        </div>
        <div className="app__productslisting-products">
          {data.products.map((product) => <Product product={product} key={product.id} />)}
        </div>

        <div className="app__products list-carousel">
          <ul>
            <li><FaArrowLeft />PREV</li>
            <li>NEXT<FaArrowRight /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Products