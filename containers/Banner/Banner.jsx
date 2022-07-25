import React from 'react'

const Banner = () => {
  return (
    <>
      <div className='app__banner-upper'>
        <div className="app__banner-box-1">
          <h1>Release,<br />New Styles!</h1>
          <p>YOU THINK, WE BULID</p>
        </div>

        <div className="app__banner-box-2">
          <div className="box1">
            <h3>New Stock</h3>
            <h1>HOME</h1>
            <hr />
            <p>Make your Home Furnishing with Dreamful Decorative Products</p>
            <button type='button'>SHOP NOW</button>
          </div>

          <div className="box2">
            
          </div>


          <div className="box3">

          </div>

          <div className="box4">
            <h3>New Stock</h3>
            <h1>OFFICE</h1>
            <hr />
            <p>Make your Home Furnishing with Dreamful Decorative Products</p>
            <button type='button'>SHOP NOW</button>
          </div>

        </div>
      </div>

      <div className="app__banner-lower">
        <div className="app__banner-lower-box1">
          <h1>LUX TABLES</h1>
          <p>STYLUS COLLECTION</p>
        </div>
        <div className="app__banner-lower-box2">
          <h1>CUBA CHAIRS</h1>
          <p>STYLUS COLLECTION</p>
        </div>
        <div className="app__banner-lower-box3">
          <h1>ELEGANT STOOLS</h1>
          <p>STYLUS COLLECTION</p>
        </div>
      </div>
    </>
  )
}

export default Banner
