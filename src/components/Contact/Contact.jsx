import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className="c-wrapper" id='contact'>
        <div className="innerWidth flexCenter c-container paddings">
            {/*left side*/}
            <div className="flexColStart c-left">
                <span className='orangeText'>My Contacts</span>
                <span className='primaryText'>Reach Out Today</span>
                <span className='secondaryText'> I am  Waiting Round the Clock to Hear from You</span>
                <div className="flexColStart contactModes">
                    {/*first row*/}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart details">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>+254 705 369 048</span>
                                </div>
                            </div>
                            <a href="tell:+254705369048" target='blank'><div className="flexCenter button">Call Now</div></a>
                        </div>

                        {/*Second Mode*/}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    < BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart details">
                                    <span className='primaryText'> WhatsApp Chat</span>
                                    <span className='secondaryText'>+254 705 369 048</span>
                                </div>
                            </div>
                            <a href="https://wa.me/+254705369048 " target='blank'><div className="flexCenter button">Chat Now</div></a>
                        </div>
                    </div>
                    {/*second row*/}
                     <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart details">
                                    <span className='primaryText'>Email</span>
                                    <span className='secondaryText mail'>awajodenish@gmail.com</span>
                                </div>
                            </div>
                            <div className="flexCenter button" onClick={() => window.location.href = 'mailto:awajodenish@gmail.com'}>Send an Email</div>

                        </div>

                        {/*Second Mode*/}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    < HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart details">
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>+254 705 369 048</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Message Now</div>
                        </div>
                    </div>

                </div>
            </div>

            {/*right side*/}
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="Contact us" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact