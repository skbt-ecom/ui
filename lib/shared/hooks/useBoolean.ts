'use client'

import * as React from 'react'

type UseBooleanReturn = [value: boolean, action: (val?: boolean) => void]

export const useBoolean = (initialValue = false): UseBooleanReturn => {
  const [value, setValue] = React.useState(initialValue)
  const action = (val?: boolean) => setValue((prevValue) => val ?? !prevValue)

  return [value, action]
}
