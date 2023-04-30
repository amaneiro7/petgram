import { useState } from 'react'

export const useInputValue = initialValue => {
  const [value, setvalue] = useState(initialValue)
  const onChange = ({ target: { value } }) => setvalue(value)
  return { value, onChange }
}
