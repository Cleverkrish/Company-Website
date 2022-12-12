import React from 'react';
import '../RandomCss/Social.css'
import {BiChevronRightCircle} from 'react-icons/bi'

function Social() {
  return (
    <>
    <div className='Socialcontent'>
        <div className='TopBanner'>
          <img src='https://media.istockphoto.com/id/1084890158/video/symmetric-lines-with-copy-space-loop.jpg?s=640x640&k=20&c=wLwE1ByapcnvDQUVqWMyybHr1GbHlVW6DdifBp9mvuo=' alt='topBanner' />
        </div>
        <h1>Social Media Marketing (SMM)</h1>
        <h5>We will provide you the best Social Media Marketing for your business, which in results give you the maximum no of leads and high ROI ( Return On Investment).</h5>
        <div className='SocialImg'>
          <img src='https://www.livingwellspendingless.com/wp-content/uploads/2020/01/5-Steps-to-Break-Free-from-Social-Media-Addiction_Feature-Image1.jpg' alt='Social'/>
        </div>
      </div>

      <div className='SocialContent2'>
        <div className='Subcontent2'>
          <h1><span>Award-winning</span> Social Media Marketing Agency India</h1>
          <p>Are you looking for the Best Social Media Marketing Services to help you advertise your brand on social media? Hire Linkplux, India's Leading Social Media Marketing Company, 
            for high-quality social media marketing services at a low cost!</p>
          <p>We are the best social media marketing agency, offering the below SMM services :</p>
          <p><BiChevronRightCircle className='Biicons'/>Social Media Strategy</p>
          <p><BiChevronRightCircle className='Biicons'/>Facebook Page Management</p>
          <p><BiChevronRightCircle className='Biicons'/>Twitter Page Management</p>
          <p><BiChevronRightCircle className='Biicons'/>LinkedIn Page Management</p>
          <p><BiChevronRightCircle className='Biicons'/>You Tube Channel Management</p>
          <p><BiChevronRightCircle className='Biicons'/>Snapchat Advertising</p>
          <p><BiChevronRightCircle className='Biicons'/>Facebook Profile Management</p>
          <p><BiChevronRightCircle className='Biicons'/>Instagram Marketing</p>
          <p><BiChevronRightCircle className='Biicons'/>Influencer Marketing</p>
        </div>
        <div className='BelowBanner'>
          <img src='https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/graphicstock-various-social-media-hand-drawn-icons-on-white-background_ry5iVjjal_SB_PM.jpg' alt='BelowBanner' />
        </div>
      </div>

      <div className='SubSocial'>
        <div className='SocialLogo'>
          <img src='https://www.infinitemediaresources.com/wp-content/uploads/2019/10/Finger-touching-phone-with-social-media-concept-and-dark-background.png' alt='round' />
        </div>
        <div className='AdditionalText'>
          <h1>What <span className='Headstyle'>We Do</span></h1>
          <h5>Our Full-Service Social Media Marketing Company Will Fuel The Growth Of Your Business</h5>
          <p><span>Social Media Audit:</span> Our social media professionals will begin by doing an in-depth review of your brand's social media presence.</p>
          <p><span>Analysis of competition:</span> Competition is a terrific reference point that can help you accomplish better. Our social experts will identify your key competitors based on their activity in search networks and how they are reaching out to customers.</p>
          <p><span>Social Media Activation:</span> We will select the most appropriate social networks in which you should participate and where others may be talking about you. We will develop and manage your social media profiles in order to attract visitors and capitalise on two-way dialogues.</p>
          <p><span>Social Influencer Management:</span> We will develop relationships with renowned bloggers, journalists, and influencers to help you connect with potential customers.</p>
          <p><span>Monitoring Social Media:</span> Our Social Media Monitoring services enable you to listen to this essential information, communicate with customers, and maintain a clean reputation while staying ahead of the competition.</p>
        </div>
      </div>
    </>
  )
}

export default Social
