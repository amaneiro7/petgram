import React, { lazy } from 'react'
import PropTypes from 'prop-types'
import { Fieldset } from './style'

const SubmitButton = lazy(() => import('@/components/SubmitButton').then(module => ({ default: module.SubmitButton })))
const Form = lazy(() => import('./style').then(module => ({ default: module.Form })))
const Input = lazy(() => import('./style').then(module => ({ default: module.Input })))
const Title = lazy(() => import('./style').then(module => ({ default: module.Title })))
const Error = lazy(() => import('./style').then(module => ({ default: module.Error })))
const Section = lazy(() => import('./style').then(module => ({ default: module.Section })))
const Link = lazy(() => import('./style').then(module => ({ default: module.Link })))
const P = lazy(() => import('./style').then(module => ({ default: module.P })))
const Wrapper = lazy(() => import('./style').then(module => ({ default: module.Wrapper })))
const Small = lazy(() => import('./style').then(module => ({ default: module.Small })))

export const UserForm = ({ handleSubmit, title, error, disabled, InputList = [], link, linkInfo, linkTitle, children, buttonActionName }) => {
  return (
    <Wrapper>
      {/* <Section> */}
      <Title>{title}</Title>
      <Form
        onSubmit={handleSubmit}
      >
        <Fieldset>
          <legend>{buttonActionName}</legend>

          {error && <Error>{error}</Error>}
          {InputList.map(element =>
            <Input
              className={error && 'error'}
              key={element.name}
              required
              {...element}
            />)}
          <Small>{children}</Small>
          <SubmitButton disabled={disabled}>{buttonActionName}</SubmitButton>
        </Fieldset>
      </Form>
      {/* </Section> */}
      <Section>
        <P>{linkInfo} <Link to={link}>{linkTitle}</Link></P>
      </Section>
    </Wrapper>
  )
}

UserForm.propTypes = {
  handleSubmit: PropTypes.func,
  title: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  link: PropTypes.string,
  linkInfo: PropTypes.string,
  linkTitle: PropTypes.string,
  children: PropTypes.node,
  buttonActionName: PropTypes.string,
  InputList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      placeholder: PropTypes.string,
      data: PropTypes.shape({
        value: PropTypes.string,
        onchange: PropTypes.func
      })
    })
  )
}
