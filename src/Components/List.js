import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Components/Css/List.css'
import iologo1 from '../Components/Images/iologo1.png'
import {AiTwotoneHome} from 'react-icons/ai'
import {MdOutlineMedicalServices} from 'react-icons/md'
import {TbNetwork} from 'react-icons/tb'
import {RiBuilding2Fill} from 'react-icons/ri'


function List() {
  return (
    <>
      <header>
        <div className='Container'>
            <div className='logoContainer'>
                <img src={iologo1} alt='logo' className='logo'/>

                <nav>
                  <div className='list'>
                    <NavLink  exact to ='/' className='classItem' activeClassName='activeItem'><AiTwotoneHome/>Home</NavLink>
                    <NavLink  to ='/services' className='classItem' activeClassName='activeItem'><MdOutlineMedicalServices/>Services</NavLink>
                    <NavLink  to ='/work' className='classItem' activeClassName='activeItem'><TbNetwork/>Our Work</NavLink>
                    <NavLink  to ='/company' className='classItem' activeClassName='activeItem'><RiBuilding2Fill/>Company</NavLink>
                  </div>
                </nav>
            </div>
        </div>
      </header>
    </>
  )
}

export default List





