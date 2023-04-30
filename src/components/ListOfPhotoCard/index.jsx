import React, { useEffect, useState } from 'react'
import { PhotoCard } from '@/components/PhotoCard'

export function ListOfPhotoCard () {
  // const [photoCard, setPhotoCard] = useState([])

  // useEffect(() => {
  //   fetch('https://petgram-server-edsf8xpy2.now.sh/photos')
  //     .then(res => res.json())
  //     .then(response => setPhotoCard(response))

  //   return () => {

  //   }
  // }, [])

  return (
    <ul>
      {[1, 2, 3, 4, 5].map(id => <PhotoCard key={id} />)}
    </ul>
  )
}
