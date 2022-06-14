import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import Ai from '../../assets/ai.png'

const Header = () => {
  return (
    <>
      <section className="sec-header grid_two__column section-padding" id='home'>
         <div className="sec__header-left">
          <div className="sec_header-left-wrap">
          <h1 className='main__heading'>
          Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className='para'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <div className="sec__header-left-wrap-input flex__center">
            <input type="email" placeholder='Enter Your Email' />
            <button>Get Started</button>
          </div>
          <div className="sec__header-left-wrap-people flex__center">
            <img src={people} alt="" />
            <p className='para'>1,600 people requested access a visit in last 24 hours</p>
          </div>
          </div>
         </div>
         <div className="sec__header-right flex__center">
          <img src={Ai} alt="" />
         </div>

      </section>
    </>
  )
}

export default Header