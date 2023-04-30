import React from 'react'
import { Link, Nav } from './styles'
import { MdHome, MdOutlineFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const SIZE = '32px'

export function Navbar () {
  return (
    <Nav>
      <Link to='/'><MdHome size={SIZE} /></Link>
      <Link to='/favs'><MdOutlineFavoriteBorder size={SIZE} /></Link>
      <Link to='/user'><MdPersonOutline size={SIZE} /></Link>
    </Nav>
  )
}
