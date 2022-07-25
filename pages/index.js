import React from 'react'
import { Banner, Navbar, News, Products, Sales } from '../containers/index'

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Products />
      
      
      
      <Sales />
      <News />
    </>
  )
}

export default Home

{/* <Route path="signin" element={<SignIn />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />}/>
                  </Route> */}