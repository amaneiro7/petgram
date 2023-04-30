import React, { useCallback, useEffect, useState } from 'react'
import { useOnScroll } from '@/Hooks/useOnScroll'
import { RenderList } from './RenderList'

export function ListOfCategories () {
  // const { showFixed } = useCallback(() => useOnScroll(), [showFixed])
  // const { categories, loading } = useCategoriesData()
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
