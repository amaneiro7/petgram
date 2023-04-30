import React from 'react'
import { PhotoCard } from '@/components/PhotoCard'
import { SkeletonPhoto } from '@/styles/loadingSkeleton'

export default function RenderPhotoCardWithQuery ({ loading, error, data }) {
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <SkeletonPhoto />
  }

  return <PhotoCard {...data.photo} />
}
