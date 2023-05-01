import styled from 'styled-components'
import { NavLink as LinkRouter } from 'react-router-dom'
import { fadeIn } from '../../styles/animation'

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
    -webkit-tap-highlight-color: transparent;
    &[aria-current] {
        color: #000;
        &:after {
            ${fadeIn({ time: '0.5s' })};
            content: '·';
            position: absolute;
            bottom: 0;
            font-size: 34px;
            line-height: 20px;
        }
    }
    &:hover{
        color: #555;        
    }
`
