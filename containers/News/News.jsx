import React from 'react'
import images from '../../constants/images'

const News = () => {
  return (
    <div className='app__wrapper'>
      <div className='app__wrapper_item app__news'>
        <h1>LATEST NEWS</h1>
        <p>Bestselling Items In This Season</p>
        
        <div className="app__news-box">
          <img src={images.furniture1} alt="" />
        </div>
      </div>
    </div>
  )
}

export default News