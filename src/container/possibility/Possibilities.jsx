import React from 'react'
import './Possibilities.css'
// import blog01 from '../../assets/blog01'
import possibility from '../../assets/possibility.jpg'
const Possibilities = () => {
  return (
    <section className='sec-posibility section-padding grid_two__column'>
      <div className="sec-posibility-img">
        <img src={possibility} alt="" />  
      </div>
      <div className="sec-possibility-content">
         <p className='para istP'>Request Early Access to Get Started</p>
         <h1 className='secnd__heading'>
         The possibilities are beyond your imagination
         </h1>
         <p className='para p'>
         Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
         </p>
         <p className='sec-possibility-content-para'>Request Early Access to Get Started</p>
      </div>
    </section>
  )
}

export default Possibilities