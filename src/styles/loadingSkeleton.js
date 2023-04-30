import { css, keyframes } from 'styled-components'

const loadingSkeletonKeyframes = keyframes`
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }    
        100% {
            background-position: 0% 50%;
        }    
    `

export const loadingSkeleton = () => css`    
    animation: 2s ${loadingSkeletonKeyframes} ease-in-out infinite; 
`
