import { Link as LinkRouter } from 'react-router-dom'
import styled from 'styled-components'

export const Link = styled(LinkRouter)`
    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .3);
    display: inline-block;
    margin: 1%;
    overflow: hidden;
    position: relative;
    width: 31.33%;
    aspect-ratio: 16 / 9;
    &:afte {
        content: '';
        display: block;
        padding-bottom: 100%;
    }
`

export const Grid = styled.div`
    padding-top: 32px;
`

export const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
`
