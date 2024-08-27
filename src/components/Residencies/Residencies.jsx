import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "swiper/css";
import './Residencies.css';
import data from '../../utils/slider.json';
import { sliderSettings } from '../../utils/common';

const Residencies = () => {
  return (
    <section className="r-wrapper" id='articles'>
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className='orangeText'>Articles</span>
                <span className='primaryText'>Published Medium Articles</span>
            </div>
            <Swiper {...sliderSettings} >
                <SliderButtons/>
                {
                    data.map((card, i)=>(
                        <SwiperSlide key={i}>
                            <a href={card.url} target="_blank" rel="noopener noreferrer">
                            <div className="flexColStart r-card">
                                <img src={card.image} alt="Home" />
                                <span className="r-price secondaryText">
                                    <span style={{color:'orange'}}></span>
                                    <span>{card.price}</span>
                                </span>
                                <span className="primaryText">{card.name}</span>
                                <span className="secondaryText">{card.detail}</span>

                            </div>
                            </a>
                        </SwiperSlide>

                    )

                )
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies

const SliderButtons = ()=>{
    const swiper = useSwiper();
    return(
        <div className="flexCenter r-buttons">
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}