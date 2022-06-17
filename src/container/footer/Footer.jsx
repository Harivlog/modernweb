import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <section className='sec-footer flex__center section-padding'>
      <div className="footer-header flex__center">
        <h1 className='main__heading'>
        Do you want to step in to the future before others
        </h1>
       <div className="footer-header-btn">
       <button type='button' className='footer-btn'>Request Early Access</button>

       </div>
      </div>
      <div className="footer-main-wrap grid_four__column">
          <div className="footer-logo">
            <div className="footer-img">
              <img src={logo} alt="" />
              
            </div>
            <p className='para'>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className="footer-links footer-item-links">
            <div>

            <h4>Links</h4>
            </div>
            <div className="">
              <li>Overons</li>
              <li>Social Media</li>
              <li>Counters</li>
              <li>Contact</li>
            </div>
          </div>
          <div className="footer-Company footer-item-links">
            <div>

            <h4>Company</h4>
            </div>
            <div className="">
              <li>Terms & Conditions</li>
              <li>Privacy and POlicy</li>
              <li>Contact</li>
            </div>
          </div>
          <div className="footer-touch footer-item-links">
            <div>

            <h4>Get in Tech</h4>
            </div>
            <div className="">
              <li>Crechterwoord K12 182 DK Alknjkcb</li>
              <li>085-132567</li>
              <li>info@payme.net</li>
            </div>
          </div>

      </div>
      <div className="footer-copy-right flex__center">
        <p >© 2021 GPT-3. All rights reserved.</p>
      </div>
    </section>
  )
}

export default Footer