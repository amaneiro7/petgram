import React from 'react'
import { PhotoCard } from '@/components/PhotoCard'

export const RenderListPhotoCard = ({ loading, data }) => {
  return (
    <>
      {loading
        ? [1, 2, 3, 4].map(photo => <PhotoCard key={photo} />)
        : data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </>

  )
}
