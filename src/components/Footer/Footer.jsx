import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
      
        <div className="flexColCenter f-container">
        <div className="socials paddings">
              <a href="https://x.com/AtutiOtieno" target='Blank'><img src="x.svg" alt="Link to my twitter handle" /></a>
              <a href="https://www.instagram.com/_denish.awajo/" target='Blank'><img src="instagram.svg" alt="Link to my twitter handle" /></a>
              <a href="https://www.linkedin.com/company/otieno-atuti-company-advocates/" target='Blank'><img src="ln.svg" alt="Link to Linked In page" /></a>
              <a href="https://www.facebook.com/profile.php?id=61563173245735&sk=about" target='Blank'><img src="fb.svg" alt="Link to Face Book Page" /></a>
            </div>
                <span className="secondarytext">&copy; Copyright Otieno Atuti & Company Advocates | 2025</span>
            
        </div>
    </section>
  )
}

export default Footer