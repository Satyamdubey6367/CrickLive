import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Topnav.css'
export const Topnav = () => {
  // const[show,setShow]=useState(false)

    return (
        <div>
            <header class="head-area">
                <div class="header-container">
                    <div class="logo">
                        <h1> <span><i class="fa-solid fa-baseball"></i></span>CricLive</h1>
                    </div>
                  
                    <div class="menu">
                        <ul class="menu1">
                        <Link to="/"> <span><h5 class="active">Live Score</h5></span></Link>
                        <Link to ="/currentmatches"> <span><h5 >Current Matches</h5></span></Link>
                        <Link to="country"> <span><h5 class="">Country List</h5></span></Link>
                        <Link to="point"> <span><h5 class="">Point Table</h5></span></Link>
                        {/* <i class="fa-solid fa-bars"className='icon4' ></i> */}
                        {/* <Link to="/contact"> <span><h5 class="">Contact</h5></span></Link> */}
                        </ul>
                    
                    </div>
                </div>

            </header>

     <section>
      <Outlet/>
     </section>
     <footer className='size'>
  <div class="social">
    <p>Follow me on social media</p>
    <ul class="wrapper">
      <a href="#" target="_blank">
        <li class="icon linkedin">
          <span class="tooltip">LinkedIn</span>
          <span><i class="fab fa-linkedin"></i></span>
        </li>
      </a>
      <a href="#" target="_blank">
        <li class="icon github">
          <span class="tooltip">GitHub</span>
          <span><i class="fab fa-github"></i></span>
        </li>
      </a>
      <a href="#" target="_blank">
        <li class="icon facebook">
          <span class="tooltip">Facebook</span>
          <span><i class="fab fa-facebook-f"></i></span>
        </li>
      </a>
      <a href="#" target="_blank">
        <li class="icon instagram">
          <span class="tooltip">Instagram</span>
          <span><i class="fab fa-instagram"></i></span>
        </li>
      </a>
      <a href="#" target="_blank">
        <li class="icon twitter">
          <span class="tooltip">Twitter</span>
          <span><i class="fab fa-twitter"></i></span>
        </li>
      </a>
      <a href="#" target="_blank">
        <li class="icon github">
          <span class="tooltip">CodePen</span>
          <span><i class="fab fa-codepen"></i></span>
        </li>
      </a>
    </ul>
  </div>
  <div class="final_text"></div>
  <p>Copyright &copy; All rights reserved
    <br/>Designed by Pushpendra Singh Sisodiya, 2023
  </p>
</footer>
     
    </div >
  )
}