import React from 'react'
import { ListOfPhotoCard } from '@/components/ListOfPhotoCard'
import { ListOfCategories } from '@/components/ListOfCategories'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export function Home () {
  const params = useParams()
  return (
    <>
      <Helmet>
        <title>Petgram - Tu app de fotos de mascotas</title>
        <meta name='description' content='Con Petgram puedes encontrar fotos de animales domésticos muy bonitos' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCard categoryId={params.id} />
    </>
  )
}
