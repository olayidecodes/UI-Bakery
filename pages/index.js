import React from 'react'
import { Banner, Footer, Logos, Navbar, News, Products, Promotions, Sales, Specials } from '../containers/index'

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Products />
      <Sales />
      <Promotions />
      <Specials />
      <News />
      <Logos />
      <Footer />
    </>
  )
}

export default Home

{/* <Route path="signin" element={<SignIn />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />}/>
                  </Route> */}