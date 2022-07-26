import React from 'react'

import { GiPhone } from 'react-icons/gi'

const Logos = () => {
  return (
    <div className='app__logo app__wrapper'>
        <div className="lower">
            <div className="items">
                <GiPhone className='icon'/>
                <div className="text">
                    <span>24X7 support</span>
                    <p>24x7 support open</p>
                </div>
            </div>
            <div className="items">
                <GiPhone className='icon'/>
                <div className="text">
                    <span>daily saving</span>
                    <p>24x7 support open</p>
                </div>
            </div>
            <div className="items">
                <GiPhone className='icon'/>
                <div className="text">
                    <span>love to share</span>
                    <p>Love the way to share</p>
                </div>
            </div>
            <div className="items">
                <GiPhone className='icon'/>
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