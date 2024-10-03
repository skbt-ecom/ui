'use client'

import { useForm, type UseFormProps } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { type TypeOf, type ZodTypeAny } from 'zod'

interface UseControlledForm<T extends ZodTypeAny> extends UseFormProps<TypeOf<T>> {
  schema: T
}

export const useControlledForm = <T extends ZodTypeAny>({ schema, ...formConfig }: UseControlledForm<T>) => {
  return useForm({
    ...formConfig,
    resolver: zodResolver(schema)
  })
}
