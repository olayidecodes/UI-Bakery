import React from 'react'

import { GiTentacleHeart } from 'react-icons/gi'
import { FiPhoneCall, FiThumbsUp } from 'react-icons/fi'
import { MdOutlineSavings } from 'react-icons/md'

const Logos = () => {
  return (
    <div className='app__logo app__wrapper'>
        <div className="lower">
            <div className="items">
                <FiPhoneCall className='icon'/>
                <div className="text">
                    <span>24X7 support</span>
                    <p>24x7 support open</p>
                </div>
            </div>
            <div className="items">
                <MdOutlineSavings className='icon'/>
                <div className="text">
                    <span>daily saving</span>
                    <p>24x7 support open</p>
                </div>
            </div>
            <div className="items">
                <GiTentacleHeart className='icon'/>
                <div className="text">
                    <span>love to share</span>
                    <p>Love the way to share</p>
                </div>
            </div>
            <div className="items">
                <FiThumbsUp className='icon'/>
                <div className="text">
                    <span>love to use</span>
                    <p>Love the way to use</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Logos