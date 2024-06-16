import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/pizza.jpeg'
import '../styles/Home.css'

function Home() {
  return (
    <div>
      <Navbar />
      <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className='headerContainer'>

          <h1>Jasi's Pizza</h1>
          <p>If You Need?</p>
          <Link to='/menu'>
            <button>ORDER NOW</button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Home
