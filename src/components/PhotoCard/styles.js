import styled from 'styled-components'

export const ImgWrapper = styled.div`
    border-radius: 10px;
    display: block;
    overflow: hidden;        
    aspect-ratio: 16 / 9;
    width: 100%;
    height: auto;
`

export const Img = styled.img`
    box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
    height: 100%;
    object-fit: cover;    
    width: 100%;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    padding-top: 8px;
    & svg {
        margin-right: 4px;
    }
`
