import React, { Suspense, lazy } from 'react'

const PhotoCard = lazy(() => import('@/components/PhotoCard').then(module => ({ default: module.PhotoCard })))
const SkeletonPhoto = lazy(() => import('@/styles/loadingSkeleton').then(module => ({ default: module.SkeletonPhoto })))

export const RenderPhotoCardWithQuery = ({ loading, error, data }) => {
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <SkeletonPhoto />
  }

  return <Suspense><PhotoCard {...data.photo} /></Suspense>
}
