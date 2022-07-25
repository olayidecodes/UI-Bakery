import React from 'react'
import { images, data } from '../../constants'

const Product = ({product: {image, name, price, oldprice, stars}}) => {
  return (
    <div>
      <div className="app__product-image">
        <img src={image} alt="" />
      </div>
      <div className="app__product-info">
        <p className="star">{stars}</p>
        <p className="name">{name}</p>
        
      </div>
    </div>
  )
}

const Products = () => {
  return (
    <div className='app__wrapper'>
      <div className='app__productslisting app__wrapper_item'>
        <div className='app__productslisting-header'>
          <h2>TRENDING PRODUCTS</h2>
          <p>Bestselling Items In This Season</p>
          <hr />
          <ul className='app__productslisting-header-links'>
            <li><a activeclassName="active" href="">FEATURED</a></li>
            <li><a activeclassName="active" href="">LATEST</a></li>
            <li><a activeclassName="active" href="">BESTSELLER</a></li>
          </ul>
        </div>
        <div className="app__productslisting-products">
          {data.products.map((product) => <Product product={product} key={product.id})}
        </div>
      </div>
    </div>
  )
}

export default Products