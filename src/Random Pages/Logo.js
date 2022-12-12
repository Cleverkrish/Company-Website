import React from 'react'
import '../RandomCss/Logo.css'
import {IoIosArrowForward} from 'react-icons/io'

function Logo() {
  return (
    <>
      <div className='Logocontent'>
        <div className='TopImg'>
          <img src='https://cdn.techloris.com/app/uploads/2018/10/windows-10-black-screen.jpg' alt='top' />
        </div>
        <h1>Logo Design & <span>Maintenance</span></h1>
        <h4>Our Logo Design Service</h4>
      </div>

      <div className='SubMain'>
        <div className='MainLogo'>
          <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/abstract-design-template-21340abe85815dac1d1a5ac7d6055bbe_screen.jpg?ts=1579687834' alt='roundimage' />
        </div>
        <div className='LogoText'>
          <h1>The <span>Approach</span></h1>
          <p>A logo should deliver an immediate and honest impression of your business philosophy, conveying why your brand is special. A logo that's
            based on an authentic brand philosophy will be meaningful and instill confidence in its audience.</p>

          <p>Designing to convey the essence of your brand goes beyond just your brand personality. Develop your logo with your ideal customers in mind.
            Your understanding of your target audience should heavily influence your approach to logo design.</p>

          <p>A powerful logo will tell the complete story with one image. While some MAJOR brands may be able to pull off a brandmark-style logo,
            it's not recommended for businesses that are not yet a household name.</p>
        </div>
      </div>

      <div className='SecLogoContent'>
        <div className='LogoText2'>
          <h1>Design <span>&</span> Communication</h1>
          <p><IoIosArrowForward className='Arrowicon'/>Powerful Creatives & Design communication has vital role to taking the brand strategies to another level.</p>
          <p><IoIosArrowForward className='Arrowicon'/>Allow our designers to present you with quality design concepts, then review your top choices.</p>
          <p><IoIosArrowForward className='Arrowicon'/>Your brand is bigger than your company logo. Get everything you need to grow your business with one of these affordable logo design services.</p>
          <p><IoIosArrowForward className='Arrowicon'/>Instead of relying on one designer or agency to create your logo, you can crowdsource the job by starting a logo design contest.</p>
        </div>
        <div className='SecondLogo'>
          <img src='https://static.vecteezy.com/system/resources/thumbnails/006/160/680/small/business-tools-color-icons-set-office-accessories-isolated-illustrations-pack-company-employee-businessman-equipment-personal-cup-corporate-booklet-pencil-and-document-folder-vector.jpg' alt='Secondlogo' />
        </div>
      </div>

    </>
  )
}

export default Logo
