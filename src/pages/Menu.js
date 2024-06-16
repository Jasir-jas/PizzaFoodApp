import React from 'react'
import Navbar from '../components/Navbar'
import { MenuList } from '../helpers/MenuList'
import MenuItem from '../components/MenuItem'
import '../styles/Menu.css'


function Menu() {
  return (
    <div>
      <Navbar />

      <div className='menu'>
        <h1 className='menuTitle'>Our Menu </h1>
        <div className='menuList'>
          {MenuList.map((menuItem, key) => {
            return (

              <MenuItem
                key = {key}
                name = {menuItem.name}
                price = {menuItem.price}
                image = {menuItem.image}
              />

            )

          })}
        </div>
      </div>

    </div>
  )
}

export default Menu
