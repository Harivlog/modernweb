import React from 'react'
import './brand.css'
import {google , dropbox,shopify, atlassian,slack} from './index'
const Brand = () => {
  return (
    <>
    <div className="sec-brand flex__center">
      <div>
        <img src={google} alt="" />
      </div>
      <div>
        <img src={dropbox} alt="" />
      </div>
         <div>
        <img src={shopify} alt="" />
      </div>   <div>
        <img src={atlassian} alt="" />
      </div>   <div>
        <img src={slack} alt="" />
      </div>
    </div>
    </>
  )
}

export default Brand 