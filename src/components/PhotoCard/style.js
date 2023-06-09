import styled from 'styled-components'
import { fadeIn } from '@/styles/animation'
import { loadingSkeleton } from '@/styles/loadingSkeleton'

export const Article = styled.article`
    min-height: 200px;
    padding: 50px 0;
`

export const ImgWrapper = styled.div`
    border-radius: 10px;
    display: block;
    overflow: hidden;        
    aspect-ratio: 16 / 9;
    width: 100%;
    height: auto;
`

export const Img = styled.img`
    ${fadeIn()}
    box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
    object-fit: cover;    
    width: 100%;
    height: 100%;
    ${loadingSkeleton()}
`
