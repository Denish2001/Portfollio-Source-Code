import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "swiper/css";
import './projects.css';
import data from '../../utils/projects.json';
import { sliderSettings } from '../../utils/common';

const Projects = () => {
  return (
    <section className="r-wrapper" id='projects'>
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className='orangeText'>Projects</span>
                <span className='primaryText'>Project repositories</span>
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

export default Projects

const SliderButtons = ()=>{
    const swiper = useSwiper();
    return(
        <div className="flexCenter r-buttons">
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}