import styled from 'styled-components'

export const Button = styled.button`
    display: block;
    width: 100%;
    height: 32px;
    background: #8d00ff;
    color: #fff;
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    &[disabled] {
        opacity: .3;
    }
`
