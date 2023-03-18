import React from 'react'
import { BsSuitHeart } from 'react-icons/bs'
import { FiShoppingBag } from 'react-icons/fi'
import { MdOutlineHeadsetMic } from 'react-icons/md'
import {TbTruckDelivery} from 'react-icons/tb'

const Promotions = () => {
  return (
    <div className='app__promotions app__wrapper'>
        <div className="app__promotions-items app__wrapper-items">
            <div className="app__promotions-upper">
                <div className="upper-item">
                    <BsSuitHeart className='icon'/>
                    <div className='quantity'>
                        <h1>100</h1>
                        <p>%</p>
                    </div>
                    <p>SATISFACTON</p>
                </div>
                <div className="upper-item">
                    <TbTruckDelivery className='icon'/>
                    <div className='quantity'>
                        <h1>60</h1>
                        <p>+</p>
                    </div>
                    <p>BRANDED WATCH</p>
                </div>
                <div className="upper-item">
                    <FiShoppingBag className='icon'/>
                    <div className='quantity'>
                        <h1>900</h1>
                        <p>+</p>
                    </div>
                    <p>PRODUCT SALES</p>
                </div>
                <div className="upper-item">
                    <MdOutlineHeadsetMic className='icon'/>
                    <div className='quantity'>
                        <h1>63</h1>
                        <p>+</p>
                    </div>
                    <p>STORE LOCATION</p>
                </div>
            </div>

            <div className="app__promotions-lower">
                <div className="box box1">
                    <h1><p>&</p>MID-SEASON SALE</h1>
                    <div className="text">
                        <p>STARTING FROM.</p>
                        <span>09 To 29-July</span>
                    </div>
                </div>

                <div className="box">
                    <div className="text">
                        <p>UP TO</p>
                        <span>40%<p>OFF</p></span>
                    </div>
                    <button>EXPLORE DEALS</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Promotions