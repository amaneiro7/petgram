import React from 'react'
import { RenderFavs } from '@/container/GetFavorites'
import { Helmet } from 'react-helmet'

export const Favs = () => {
  return (
    <>
      <Helmet>
        <title>Petgram - Tus favoritos</title>
        <meta name='description' content='Aqui puedes encontrar tus favoritos' />
      </Helmet>
      <div>Favs</div>
      <RenderFavs />
    </>
  )
}
