import React from 'react'
import './Navbar.css'
import { useState, useEffect } from 'react'

function Navbar() {

const [show,handleshow]=useState(false)

useEffect(()=>{

  //to check if event has happend or not ---- window.addEventListner
  window.addEventListener('scroll',()=>{
    if(window.scrollY>250){
      handleshow(true)
    }
    else{
      handleshow(false)
    }
  })
  
},[])

// console.log(show);
  
  return (
    <div className={`nav ${show && 'nav_black'}`}>
       <img className='logo' 
       src='https://i.postimg.cc/sXxNRVJm/Netflix-Logo-PMS.png' 
       />
    </div>
  )
}

export default Navbar