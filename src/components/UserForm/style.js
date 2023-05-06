import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 12px;
    display: flex;
    gap: 24px;
    flex-direction: column;
`

export const Section = styled.section`
    padding: 24px;
    border: 1px solid #ccc;    
    border-radius: 5px;
    `
export const Fieldset = styled.fieldset`    
    padding: 24px;
    border-color:#ccc;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    `

export const Form = styled.form`
    padding: 16px 0;
`

export const Input = styled.input`
    display: block;
    width: 100%;
    padding: 10px 4px;    
    border: 2px solid #ccc;
    border-radius: 3px;
    &[disabled] {
        opacity: .3;
    }
    &.error {
        background-color: ivory;
        border: none;
        outline: 1px solid red;
        border-radius: 5px;
    }
`

export const Title = styled.h2`
  font-size: 20px;
  text-align: center;
  font-weight: 500;
  padding: 8px 0;
`

export const Error = styled.span`
    color: red;
    font-size: 14px;
    font-weight: 500;
`

export const P = styled.p`
    text-align: center;
`

export const Small = styled.small`
    text-align: center;
    font-size: 14px;
    font-weight: 300;
    line-break: auto;    
    
`

export const Link = styled(LinkRouter)`
    text-decoration: none;
    font-weight: 700;
`
