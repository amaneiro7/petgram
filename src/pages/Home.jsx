import React from 'react'
import { ListOfPhotoCard } from '@/components/ListOfPhotoCard'
import { ListOfCategories } from '@/components/ListOfCategories'
import { useParams } from 'react-router-dom'

export default function Home () {
  const { id } = useParams()
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCard categoryId={id} />
    </>
  )
}
