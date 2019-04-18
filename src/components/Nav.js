import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/create-sneaker'>Upload A Sneaker!</NavLink>
  </nav>
)

export default Nav
