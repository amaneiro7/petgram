import React from 'react'
import { PhotoCardWithQuery } from '@/container/PhotoCardWithQuery'
import { useParams } from 'react-router-dom'

export function Detail () {
  const { detailId } = useParams()
  console.log(detailId)
  return (
    <PhotoCardWithQuery id={detailId} />
  )
}