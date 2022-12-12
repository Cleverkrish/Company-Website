import React from 'react'
import 'animate.css';
import '../Css/Company.css';
import { Link, Route } from 'react-router-dom';

function Company() {
  return (
    <>
      <div className='SectionMain'>
        <div className='MainImg'>
          <img src='https://spreadthename.com/wp-content/uploads/2021/04/professional-web-design-social-ink-professional-web-design-png-1000_813.png' alt='computer' />
        </div>
        <h3 className='bounceInRight'>About Us</h3>
        <h1 className='backInLeft'>Our Company That Help You</h1>
        <p className='slideInUp'>We provide our services on the basis of 'work for hire'; therefore all rights are transferred to you upon the completion of the project. Your success is our milestone! When you outsource content to Content Development Pros, you
          are assured delivery of high quality that all help you achieve your content objectives.</p>
        <ul>
          <li>We are the leaders in web and App based.</li>
          <li>Services for our international clients</li>
          <li>Utilize your time at a maximum efficiency</li>
        </ul>
        <Route>
          <Link to='/register'>
            <button className='btning'>View More</button>
          </Link>
        </Route>
      </div>



      <div className='Mainpoint'>
        <div className='BackImg'>
          <img src='https://media.istockphoto.com/id/531331130/photo/business-people-in-the-office-building.jpg?s=170667a&w=0&k=20&c=LOe0Q25vCrZihqBW5gwQJ9ygIvlmhxPrvWUybUyQ6RU=' alt='background' />
        </div>
        <h1>Not all the clients are CMS oriented. Some give us challenging tasks and activities to shape and mould us.
          We also take up custom web development projects and applications. Now who will maintain it ? We can do it for you, don't worry about that.</h1>
      </div>



      <div className="container1">

        <div className="card1">
          <div className="content">
            <h2 className="title">Web Development</h2>
            <p className="data">
            Web development is the building and maintenance of websites; 
            it's the work that happens behind the scenes to make a website look great, 
            work fast and perform well with a seamless user experience.
            </p>
          </div>
        </div>

        <div className="card1">
          <div className="content">
            <h2 className="title">Digital Marketing</h2>
            <p className="data">
            Digital marketing, also called online marketing, is the promotion of brands to connect with potential
             customers using the internet and other forms of digital communication.
            </p>
          </div>
        </div>

        <div className="card1">
          <div className="content">
            <h2 className="title">Graphics Design</h2>
            <p className="data">
            Graphic design is the art or profession of visual communication that combines images, words, and ideas to convey 
            information to an audience, especially to produce a specific effect.
            </p>
          </div>
        </div>

        <div className="card1">
          <div className="content">
            <h2 className="title">SEO</h2>
            <p className="data">
            Search engine optimization (SEO) is the practice of orienting your website to rank higher on a 
            search engine results page (SERP) so that you receive more traffic.
            </p>
          </div>
        </div>
      </div>
    

    <div className='officeImg'>
      <img src='https://img.freepik.com/premium-photo/silhouette-image-business-people-group-city-background_31965-25102.jpg?w=2000' alt='office'/>
    </div>

    </>
  )
}

export default Company
