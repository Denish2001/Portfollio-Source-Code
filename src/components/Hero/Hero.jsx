import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero-wrapper" id='home'>
        <div className="paddings innerWidth flexCenter hero-container">
           {/*right side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <motion.h1
                    initial={{y: "2rem", opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration:2, type:"spring"}}>
                       I'm Denish Awajo,<br />I Juggle Data Science <br />& Software Engineering
                    </motion.h1>
                </div>
                <div className="flexColStart secondaryText hero-des">
                    <span>Hire Me Today</span>
                    <span>I enjoy working with teams and I live by Kaizen</span>
                </div>
                <div className="flexCenter stats">
                    <div className="flexColCenter  stat">
                        <span>
                            <CountUp start={5} end={12} duration={5}/>
                            <span>++</span>
                        </span>
                        <span className='secondaryText'>Happy customers</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1000} end={3000} duration={5}/>
                            <span>++</span>
                        </span>
                        <span className='secondaryText'>Lines of code Written</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1} end={6}/>
                            <span>++</span>
                        </span>
                        <span className='secondaryText'>Cerifications</span>
                    </div>

                </div>
            </div>
            {/*left side */}
            <div className="flexCenter hero-right">
                < motion.div
                initial={{x: "7rem", opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{duration:2, type:"ease-in"}}
                className="image-container">
                    <img src="./hero-image.jpg" alt="hero image" />
                </motion.div>
            </div>
        </div>

    </section>
  )
}

export default Hero