import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="innerWidth paddings g-container">
            <div className="innerContainer flexColCenter">
                <span className='primaryText'>Get Started With me Today</span>
                <span className='secondaryText'>Subscribe for more content</span>
                <button className='button'>
                    <a href="mailto:ondiegijairus@gmail.com">Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted