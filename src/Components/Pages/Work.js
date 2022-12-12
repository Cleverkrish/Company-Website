import React from 'react'
import { Link, Route } from 'react-router-dom'
import '../Css/Work.css'

function Work() {
  return (
    <>
      <div className='content1'>
        <div className='imgcontainer'>
          <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hand-typing-on-key-board-laptop-with-cup-of-coffee-on-wooden-table-1530275820.jpg' alt='laptop' />
        </div>
        <h1>Welcome To Our Website</h1>
      </div>


      <div className='container'>
        <div className='carousel'>
          <div className='image'><span>E-Commerce</span></div>
          <div className='image'><span>Web Development</span></div>
          <div className='image'><span>App Development</span></div>
          <div className='image'><span>Software</span></div>
          <div className='image'><span>Digital Marketing</span></div>
          <div className='image'><span>Logo Design</span></div>
          <div className='image'><span>Social Media</span></div>
          <div className='image'><span>Graphics Design</span></div>
          <div className='image'><span>SEO</span></div>
        </div>
      </div>




      <div className='Containing'>
        <div className='thumbanail right'>
          <img src='https://assets.justinmind.com/wp-content/uploads/2022/06/travel-template-1-justinmind.png' alt='phone' />
        </div>

        <div className='textView'>
          <h3>This is our Mobile App Portfolio</h3>

          <p>Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application 
            utilizes a network connection to work with remote computing resources. </p>
        

        <Route>
          <Link to='/register'>
          <button className="button-29" >View Portfolio</button>
          </Link>
        </Route>
        </div>



        <div className='thumbanail left'>
          <img src='https://s40424.pcdn.co/in/wp-content/uploads/2022/07/digital-marketing-1.jpg' alt='phone' />
        </div>

        <div className='textViewing'>
          <h3>This is our Digital Marketing Portfolio</h3>

          <p>Digital marketing is a strategic marketing approach focused on creating and distributing valuable, relevant, and consistent content 
            to attract and retain a clearly defined audience. It ultimately aims to drive profitable customer action.</p>
         
        <Route> 
          <Link to='/register'>
          <button className="button-29" >View Portfolio</button>
        </Link>
        </Route>
        </div>



        <div className='thumbanail right'>
          <img src='https://www.digiott.com/assets/images/graphics/1.png' alt='phone' />
        </div>

        <div className='textView'>
          <h3>This is our Graphics Design Portfolio</h3>

          <p>Our award-winning writers and experienced graphic designers are as attentive as they are creative, 
            and they are dedicated to making your vision come to life.</p>
        

        <Route>
          <Link to='/register'>
          <button className="button-29" >View Portfolio</button>
          </Link>
        </Route>
        </div>


        <div className='thumbanail left'>
          <img src='https://www.pngitem.com/pimgs/m/145-1455713_php-web-development-programming-web-development-images-png.png' alt='phone' />
        </div>

        <div className='textViewing'>
          <h3>This is our Web Development Portfolio</h3>

          <p>Web development is the process of building, programming, and maintaining websites and web applications. Website developers use various programming languages, 
            like HTML, CSS, and JavaScript, to develop websites and web applications.</p>
         
        <Route> 
          <Link to='/register'>
          <button className="button-29" >View Portfolio</button>
        </Link>
        </Route>
        </div>
      </div>


    </>
  )
}

export default Work
