import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="innerWidth paddings flexColCenter f-container">
                <img src="./logo.png" alt="logo" width={260} />
                <span className="secondaryText">Kaizen</span>
                <span className="secondaryText">&copy; Copyright Denish Awajo | 2024</span>
            
        </div>
    </section>
  )
}

export default Footer