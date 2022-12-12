import React from 'react'
import '../Css/Home.css'
import {Route,Link} from 'react-router-dom'

function Home() {
  return (
    <>
    <div className='imgContainer'>
      <img src='https://img.freepik.com/premium-vector/programmer-working-office-concept-woman-writes-code-creating-testing-apps-software-programs-development-character-scene-vector-illustration-flat-design-with-people-activities_198565-536.jpg' alt='img'/>
    </div>
      <div className='mainSection'>
        <div className='contentBox'>
          <h3>Customized Software Solutions</h3>
          <h1 className='slideInup'>#1 Software Development Company</h1>
          <p className='sllidein'>We help companies do more with less. We are the leading Software development services providing company. We provide IT solutions to small-scale businesses to large enterprises. With our help, you can manage your custom software development better and focus on what matters most to you.</p>
          <Route>
            <Link to='/register'>
          <button className='btnBox'>Start Project</button>
          </Link>
          </Route>
        </div>
      </div>

      <div className='textContent'>
        <h1>We Have Got Featured By <span>400+ Digital Media</span><br/>Channels Across<span> USA</span> And UK</h1>
      <p>Poulima Infotech is an ISO 9001:2015 certified company and we dedicate our expertise to Quality management. We are officially recognized by the Department for Promotion of Industry and Internal Trade (DPIIT). We provide top-of-the-line mobile app development expertise, from developing custom Android and iOS apps to building responsive web apps. Our mobile app development firm has been globally acclaimed for the unique mobile app development trends that we follow. We have got featured by 400+ NBC News, FOX News, CBS News, and ABC News digital media network across USA and UK.</p>
      
      <div className='HomeImages'>
      <img src='https://outsourceworkers.com.au/wp-content/uploads/2014/02/02.jpg' alt='img' className='comImg'/>
      <img src='https://thumbs.dreamstime.com/b/illustration-female-software-engineers-blue-background-illustration-female-software-engineers-blue-background-180186001.jpg' alt='img' className='carImg'/>
      </div>
      </div>
    </>
  )
}

export default Home

