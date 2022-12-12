import React from 'react'
import { Link, Route } from 'react-router-dom'
import '../RandomCss/Software.css'

function Software() {
  return (
    <>
      <div className='SoftMain'>
        <div className='SoftImg'>
          <img src='https://thumbs.dreamstime.com/b/software-development-business-process-automation-internet-technology-concept-virtual-screen-software-development-143587196.jpg' alt='Soft' />
        </div>
        <div className='SoftContent'>
          <h1>SOFTWARE DEVELOPMENT</h1>
          <p>We transform businesses with adaptable and powerful digital solutions that meet today's needs and open up new opportunities for tomorrow.
            Our industry knowledge and the most recent IT advances allow us tocreate tailor-made custom solutions according to the needs of our users.</p>
          <Route><Link to='/register'><button>Let's Discuss</button></Link></Route>
        </div>
      </div>
      <div className='Belowcontent'>
        <h2>Our Software Application Development Services</h2>
        <p>With 14+ years of experience, we have developed over 125+ software products, proving our expertise in the design and development of tech products.
          Our custom software applications meet your specific use case, budget, and timeline.</p>
      </div>

      <div className='ParentSoft'>
        <img className='image1' src='https://media.istockphoto.com/id/1064808366/photo/gold-bars.jpg?s=612x612&w=0&k=20&c=FTAKXH-lzhE5I4S917FMVsxSdPba5VavyuD4q8hZoBk=' alt='First' />
        <img className='image2' src='https://www.recablog.com/wp-content/uploads/2022/03/headerImgMT42x.png' alt='Second' />

        <div className='ParenContent'>
          <h2>BLOCKCHAIN DEVELOPMENT</h2>
          <h3>Monetary System on the Blockchain</h3>
          <p>We built a comprehensive monetary system on the blockchain that facilitates the storage and trading of digital currencies into
            a wide range of crypto and fiat pairs across the globe, all from one simple interface. We helped our client redesign the user interfaces
            of their website, create the node monitoring dashboard, update the stellar core version,
            and provide maintenance services to ensure that the platform is up and always running.</p>
          <button>See Our Work</button>
        </div>
      </div>

      <div className='SecondParent'>
        <div className='Worldstyles'>
         <img className='World1' src='http://1.bp.blogspot.com/-2uIkv6WLtCQ/UxecNqT2xkI/AAAAAAAACuw/_AOXJi62W9w/s1600/vectorstock_989128.jpg' alt='World' />
         <img className='World2' src='https://olivefx.com/Contents/images/olive-plateform.png' alt='World' />
        </div>
        <div className='Subparent'>
          <h2>WEB3: FILE RETRIEVAL DASHBOARD</h2>
          <h3>FileCoin Dashboard: A Web3 File Retrieval Network Monitoring Dashboard for the FileCoin Users</h3>
          <p>A dashboard for the Web3 Content Delivery Network (CDN) that lets Filecoin users stay informed on the performance of the best file retrieval networks.
            This platform helps to gather and analyze data from several data sources and displays real-time performance indicators on a detailed dashboard that is simple to grasp.</p>
          <button>See Our Work</button>
        </div>
      </div>
    </>
  )
}

export default Software
