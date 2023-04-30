import React from 'react'
import { Category } from '@/components/Category'
import { List, Item } from './styles'
import { useCategoriesData } from '@/Hooks/useCategoriesData'

export const RenderList = ({ fixed }) => {
  const { categories, loading } = useCategoriesData()
  return (
    <List fixed={fixed}>
      {loading
        ? [1, 2, 3, 4].map(category => <Item key={category}><Category /></Item>)
        : categories.map(category =>
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>)}
    </List>
  )
}
