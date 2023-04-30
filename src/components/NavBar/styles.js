import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Nav = styled.nav`
    position: fixed;    
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    max-width: 500px;
    height: 50px;
    /* inset: auto 0 0 0; */
    left: 0;
    bottom: 0;
    right: 0;    
    margin: 51px auto 0;
    background: #fcfcfc;
    border-top: 1px solid #e0e0e0;
    z-index: 100;
`

export const Link = styled(LinkRouter)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #888;
    transition: color .3s ease-in;
    &:hover{
        color: #555;        
    }
`
