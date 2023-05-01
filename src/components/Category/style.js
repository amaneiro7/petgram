import styled from 'styled-components'
import { loadingSkeleton } from '@/styles/loadingSkeleton'
import { Link as LinkRouter } from 'react-router-dom'

export const Link = styled(LinkRouter)`
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    width: 75px;
`

export const Image = styled.img`
    border: 1px solid #ddd;
    box-shadow: 0 10px 14px rgba(0,0,0,.2);
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
    height: 75px;
    width: 75px;   
    ${loadingSkeleton()}    
`