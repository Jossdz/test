import { useState } from 'react'

const useInput = () => {
  const [value, setValue] = useState('')

  const onChange = ({ target: { value } }) => {
    setValue(value)
  }

  const bind = {
    value,
    onChange
  }
  return [bind, value]
}

export default useInput
