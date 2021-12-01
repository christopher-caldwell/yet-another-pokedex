import { useState, Dispatch, SetStateAction } from 'react'

/** The input */
type Value = string
/** To be spread on the input in order to bind the input to the state value */
export type BindValue = {
  value: string
  onChangeText: (text: string) => void
}
/** Sets the input */
type SetValue = Dispatch<SetStateAction<string>>
type ResetValue = () => void

type UseInputReturn = [Value, BindValue, SetValue, ResetValue]

export const useInput = (initialValue: string): UseInputReturn => {
  const [value, setValue] = useState(initialValue)

  return [
    value,
    {
      value,
      onChangeText: text => {
        setValue(text)
      },
    },
    setValue,
    () => setValue(''),
  ]
}
