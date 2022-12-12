import React from 'react'
import '../RandomCss/AppDev.css'
import {TiTick} from 'react-icons/ti'

function AppDev() {
  return (
    <>
      <div className='DevContent'>
        <div className='BlueImg'>
          <img src='https://png.pngtree.com/thumb_back/fh260/background/20200821/pngtree-sky-blue-solid-color-background-wallpaper-image_396578.jpg' alt='Blue' />
        </div>
        <h1>Application Development</h1>
        <h4>Home/Application Development</h4>
      </div>

      <div className='AppDevParagraph'>
        <div className='DevPara'>
          <h2>User Experience</h2>
          <div className='line'>
            <hr />
          </div>
          <h3>Find all services offered meeting the highest of quality standards in their
             respective areas - be it a complete software application or architecture design or testing services, quality standard is our top priority</h3>

          <p>The whole world is looking to the software industry for introducing a higher level of comfort than there already is around us. For this purpose, 
            we should choose to rise to the occasion to create software solutions and applications that make life easier and simplifies their tasks. In short, 
            IT companies are the backbone of the world when it comes to pampering our customers.</p>

          <p>Whether it is an employee portal for a software company or a product development and testing environment for a manufacturing firm, when it comes to bespoke services or a 
            customized application development, we can boast of being the best in the business. With relevant experience in most fields and technical expertise, we have the ability to
            convert all your application requirements into product features. Further, we can ensure that a high-quality approach is practiced in every stage 
            of the application development from the design to implementation and shipping.</p>   

          <p>We have the ability to rapidly architecture your product, develop, test and implement them in a short span of time. The scalability and flexibility of our 
            application can incorporate future changes and prove to be the best in the market due to its advanced technology.</p>  

          <h4>Our approach to application development</h4>  
          <p>Typically, our application development process can be boiled down to “Agile development process”. However, there are a series of pilot steps performed 
            before the process so that it facilitates easier implementation of product ideas</p>  
          </div>

          <div className='ManyLists'>
            <p><TiTick className='TiIcons'/>Establishment of trust between the two companies in terms of both technical and commercial aspects.</p>
            <p><TiTick className='TiIcons'/>Understanding your business functions and your target customers.</p> 
            <p><TiTick className='TiIcons'/>Establishment of proper communication channels between the companies.</p>
            <p><TiTick className='TiIcons'/>Briefing all our employees of your terms and policies so that a strict policy of confidentiality can be enforced.</p>   
            <p><TiTick className='TiIcons'/>Understanding the technical and functional requirements.</p> 
            <p><TiTick className='TiIcons'/>Provision of cost estimates and a suitable timeframe.</p>  
            <p><TiTick className='TiIcons'/>System design, analysis, evaluation and outline.</p>  
            <p><TiTick className='TiIcons'/>Enforce quality and time management as the chief points.</p>
            <p><TiTick className='TiIcons'/>Frequent progress reports as decided between us in the agreement.</p>  
            <p><TiTick className='TiIcons'/>Introducing iterative product creation cycles to achieve best possible outcome.</p>
          </div>

          <div className='SmallLists'>
            <p><TiTick className='TiIcons'/>Product Engineering</p>
            <p><TiTick className='TiIcons'/>New Product Development</p>
            <p><TiTick className='TiIcons'/>Product Modernization</p>
            <p><TiTick className='TiIcons'/>Application Development</p>
            <p><TiTick className='TiIcons'/>Product Migration</p>
            <p><TiTick className='TiIcons'/>Product Maintenance</p>
            <p><TiTick className='TiIcons'/>Web Application</p>
            <p><TiTick className='TiIcons'/>SaaS</p>
          </div>
      </div>
    </>
  )
}

export default AppDev
