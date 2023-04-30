import React from 'react'
import { Button } from './styles'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

export default function FavButton ({ likes, liked, onClick }) {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick}>
      <Icon size='24px' /> {likes} likes!
    </Button>
  )
}
