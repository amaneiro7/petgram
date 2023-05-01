import React, { Suspense, lazy } from 'react'
import { useParams } from 'react-router-dom'

const PhotoCardWithQuery = lazy(() => import('@/container/PhotoCardWithQuery').then(module => ({ default: module.PhotoCardWithQuery })))

export const Detail = () => {
  const { detailId } = useParams()
  return (
    <Suspense>
      <PhotoCardWithQuery id={detailId} />
    </Suspense>
  )
}
