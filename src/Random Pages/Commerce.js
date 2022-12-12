import React from 'react'
import '../RandomCss/Commerce.css'
import { HiShoppingCart } from 'react-icons/hi'
import { MdOutlineAutoGraph } from 'react-icons/md'


function Commerce() {
  return (
    <>
      <div className='Commercecontent'>
        <div className='CommBanner'>
          <img src='https://thumbs.dreamstime.com/b/ecommerce-icon-special-blue-banner-background-ecommerce-icon-isolated-special-blue-banner-background-abstract-illustration-123108022.jpg' alt='CommBanner' />
        </div>
        <h1>Crafting Online Business For All<span><HiShoppingCart /></span> </h1>
        <h5>Our E-Commerce</h5>
      </div>
      <div className='CommContent'>
        <h1>Grow Your Business <span><MdOutlineAutoGraph /></span></h1>
        <h4>Get your website designed in just a few clicks.</h4>
      </div>

     <div className='CommBelow'>
      <div className='Commcontent'>
        <h1>Creative UI</h1>
        <p>Blending with a professional and clear look, our website templates showcase your products and services to a larger audience online.</p>
      </div>
      <div className='CommImg'>
        <img src='https://pixerea.co.in/images/e-commerce.png' alt='Commerce'/>
      </div>
     </div>

     <div className='CommMiddle'>
      <div className='CommiddleImg'>
        <img src='https://colowi.com/wp-content/uploads/2021/04/eCommerce-website-development-service-cambodia.jpg' alt='CommMiddle'/>
      </div>
      <div className='ComMiddleContent'>
        <h1>Easy To Use</h1>
        <p>No coding website ready at your fingertips. Our website development process is easy to use and is PRO to bring your business online.</p>
      </div>
     </div>

     <div className='CommBottom'>
      <div className='Commbotcontent'>
        <h1>Optimized Website</h1>
        <p>Website is your business identity today. Create your own, user and search engine friendly website with the top website builder.</p>
      </div>
      <div className='CommbotImg'>
        <img src='https://www.startupguys.net/wp-content/uploads/2020/04/ecommerce-website.png' alt='Commercebottom'/>
      </div>
     </div>
    </>
  )
}

export default Commerce
