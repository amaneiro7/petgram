import React, { Suspense, lazy, memo } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const ListOfPhotoCard = lazy(() => import('@/components/ListOfPhotoCard').then(module => ({ default: module.ListOfPhotoCard })))
const ListOfCategories = lazy(() => import('@/components/ListOfCategories').then(module => ({ default: module.ListOfCategories })))

const HomePage = () => {
  const params = useParams()
  return (
    <>
      <Helmet>
        <title>Petgram - Tu app de fotos de mascotas</title>
        <meta name='description' content='Con Petgram puedes encontrar fotos de animales domésticos muy bonitos' />
      </Helmet>
      <Suspense>
        <ListOfCategories />
      </Suspense>
      <Suspense>
        <ListOfPhotoCard categoryId={params.id} />
      </Suspense>
    </>
  )
}

export const Home = memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
