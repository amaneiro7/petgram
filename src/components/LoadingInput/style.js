import styled, { keyframes } from 'styled-components'

const loadingAnimation = keyframes`  
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }   
  `
export const Loader = styled.span`
    width: 20px;
    height: 20px;
    border-width: 3px;
    border-style: dashed solid  solid dotted;
    border-color: #FFF #FFF transparent #FFF;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: ${loadingAnimation} 1s linear infinite;
    &:after {
        content: '';  
        box-sizing: border-box;
        position: absolute;
        left: 6px;
        top: 11px;
        border: 5px solid transparent;
        border-right-color: #FFF;
        transform: rotate(-40deg);
    }  
`
