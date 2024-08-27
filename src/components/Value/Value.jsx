import React, { useState } from 'react';
import './Value.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState 
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md';
import data from '../../utils/accordion';


const Value = () => {
  return (
    <section className="v-wrapper" id='cert'>
        <span className='orangeText heading'>Certifications</span>
        <div className="innerWidth flexCenter v-container">
         
                <div className='flexColStart'>
                    <img src="./forward.png" className="image-container" alt="" />
                    <span className="orangeText">McCkinsey Forward <br /> learning Program</span>
                    <span className="secondaryText">Essential skills for future work.</span>
                </div>
                <div className='flexColStart'>
                    <img src="./dsgthinking.jpg" className="image-container" alt="" />
                    <span className="orangeText">IBM Introduction To <br /> Design Thinking</span>
                    <span className="secondaryText">Human-centered innovative problem-solving approach.</span>
                </div>
        </div>
    </section>
  )
}

export default Value
