import React, { useState } from 'react'
import Logo from '../assets/pizzaLogo.png'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';



function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false)

  const toggleNavbar = () => {
    setOpenNavbar(!openNavbar)
  }

  return (
    <div className='navbar'>
      <div className='leftSide' id={openNavbar ? 'open' : 'close'}>
        <Link to='/'>
          <img src={Logo} alt="" />
        </Link>

        <div className='hiddenLinks'>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className='rightSide'>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>

      </div>

    </div>
  )
}

export default Navbar
