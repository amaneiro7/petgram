import React from 'react'
import { Anchor, Image } from './styles'

export function Category ({ cover, path, emoji = '?', loading }) {
  return (
    <Anchor href={path}>
      <Image src={cover} alt='' loading={loading} />
      {emoji}
    </Anchor>
  )
}
