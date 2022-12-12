import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { GrFacebook } from 'react-icons/gr'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import '../Css/Footer.css'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'
import {FaRegAddressBook} from 'react-icons/fa'

function Footer() {
  return (
    <>
      <footer>
        <div className='cotaining containing-flex'>
          <div className='icons'>
            <BsTwitter className='icon' />
            <GrFacebook className='icon' />
            <BsInstagram className='icon' />
            <BsLinkedin className='icon' />
          </div>
          <div className='line'>
            <hr />
            <hr />
          </div>
            
          <div className='ManyContents'>
            <div className='Singleinfo'>
              <h4><FaRegAddressBook/>Address :</h4>
              <p>No:207,3<sup>rd</sup>Main Road,<br />Bhuvaneshwari Nagar,<br/>Velachery,<br/>Chennai-600042.</p>
            </div>

            <div className='Doubleinfo'>
              <h4><BsFillTelephoneFill/>Phone :</h4>
              <p>
                <a href='tel:9355872490'>+91 9355872490 - [Naresh.R]</a>
              </p>
              <p>
                <a href='tel:6534217356'>+91 6534217356 - [Amith.J]</a>
              </p>
            </div>

            <div className='SingleDigit'>
              <h4><FiMail/>Email :</h4>
              <p>
                <a href='mailto:onefolddatafort@gmail.com'>onefolddatafort@gmail.com</a>
              </p>
              <p>
                <a href='mailto:onefolddatafort@gmail.in'>onefolddatafort@gmail.in</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
