import { useState } from 'react'

export function useLocalStorage (key, initialValue) {
  const [storedValue, setStoreValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
    }
  })

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setStoreValue(value)
    } catch (error) {
      return false
    }
  }

  return [storedValue, setLocalStorage]
}
