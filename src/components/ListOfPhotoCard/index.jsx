import React, { useEffect, useState, useRef } from 'react'
import { PhotoCard } from '@/components/PhotoCard'

export function ListOfPhotoCard () {
  const arrayList = Array(10).fill(null)

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
      {arrayList.map((id, index) => <PhotoCard key={index} id={index} />)}
    </ul>
  )
}
