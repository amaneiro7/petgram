import React from 'react'
import { Link, Image } from './styles'

export function Category ({ cover, path, emoji = '?', loading }) {
  return (
    <Link to={path}>
      <Image src={cover} alt='' loading={loading} />
      {emoji}
    </Link>
  )
}
