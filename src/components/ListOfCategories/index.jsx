import React, { useEffect, useState } from 'react'
import { RenderList } from './RenderList'

export function ListOfCategories () {
  const [showFixed, setShowFixed] = useState(false)
  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  return (
    <>
      <RenderList />
      {showFixed && <RenderList fixed />}
    </>
  )
}
