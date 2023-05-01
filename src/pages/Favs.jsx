import React, { Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet'

const RenderFavs = lazy(() => import('@/container/GetFavorites').then(module => ({ default: module.RenderFavs })))

export const Favs = () => {
  return (
    <>
      <Helmet>
        <title>Petgram - Tus favoritos</title>
        <meta name='description' content='Aqui puedes encontrar tus favoritos' />
      </Helmet>
      <h2>Favs</h2>
      <Suspense>
        <RenderFavs />
      </Suspense>
    </>
  )
}
