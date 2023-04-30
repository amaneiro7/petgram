import styled, { css, keyframes } from 'styled-components'

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
    background: linear-gradient(-90deg, #c1c1c1 0%, #f8f8f8 50%, #c1c1c1 100%);
    background-size: 400% 400%;    
    animation: 2s ${loadingSkeletonKeyframes} ease-in-out infinite; 
`

export const SkeletonPhoto = styled.div`
        max-height: 280px;
        aspect-ratio: 16 / 9;
        margin-bottom: .25rem;
        border-radius: .125rem;
        ${loadingSkeleton}
`
