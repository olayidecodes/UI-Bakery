import React from 'react'
import { data } from '../../constants'
import Image from 'next/image'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'


const SpecialProduct = ({product: {image, name, price, oldprice, rating}}) => {
  
  return (
    <div className='app__specialproduct'>
      <div className="app__specialproduct-image">
        { image &&
          (<Image src={image} 
            alt = "Product Image" 
            width="280" 
            height= "350"
            className='image'/> )
        }
      
      </div>
      <div className="app__specialproduct-info">
        
        <p className="specialproduct__name">{name}</p>

        <div className="specialproduct__price">
          <p className="specialproduct__present-price">{price}</p>
          <p className="specialproduct__old-price">{oldprice}</p>
        </div>

        <div className='specialproduct__rating'>
          {
              Array(rating).fill().map((_) => (
                  <p>⭐</p>
              ))
          }
        </div>
      </div>
    </div>
  )
}

const Specials = () => {
  return (
    <div className='app__wrapper'>
      <div className='app__specialproducts-listing app__wrapper_item'>
        <div className='app__specialproducts-listing-header'>
          <h2>SPECIALS</h2>
          <hr />
        </div>
        <div className="app__specialproducts-listing-products">
          {data.products.map((product) => <SpecialProduct product={product} key={product.id} />)}
        </div>

        <div className="app__specialproducts list-carousel">
          <ul>
            <li><FaArrowLeft />PREV</li>
            <li>NEXT<FaArrowRight /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Specials