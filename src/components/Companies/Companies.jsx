import React from 'react'
import './Companies.css'

const companies = () => {
  return (
    <section className="c-wrapper" id='stack'>
      <div className="r-head flexColStart">
                <span className='orangeText'>Tool of Trade</span>
                <span className='primaryText'>Programming Stack</span>
            </div>
        <div className="paddings flexCenter innerWidth c-container">
            <img src="./python.png" alt="company" />
            <img src="./pwb.png" alt="company" />
            <img src="./html.png" alt="company" />
            <img src="./css.png" alt="company." />
            <img src="./js.png" alt="company." />
        </div>
        <div className="paddings flexCenter innerWidth c-container">
            <img src="./vb.png" alt="company." />
            <img src="./flask.png" alt="company." />
            <img src="./django.png" alt="company." />
            <img src="./react.png" alt="company." />
            <img src="./vue.png" alt="company." />
            <img src="./sql.png" alt="company." />
        </div>
    </section>
  )
}

export default companies