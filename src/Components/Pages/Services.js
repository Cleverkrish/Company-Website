import React from 'react'
import '../Css/Services.css'
import Card from './Card'
import Data from './Data'


const Services = () =>{
  return(
    <>
    
    
    <div className='services'>
      {Data.map((values)=>{
        return(
         <Card hlink= {values.Slink} title1= {values.Atitle} imgSource={values.imgsrc} />
        )
      })}
    </div>
    </>
  )
}

export default Services
