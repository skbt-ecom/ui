import { type ReactNode, useEffect } from 'react'
import { type DefaultValues, type FieldValues, FormProvider } from 'react-hook-form'
import toast from 'react-hot-toast'
import type { TypeOf, ZodTypeAny } from 'zod'
import { mockToastMessage } from '../model/mocks'
import { useControlledForm } from '$/shared/hooks'

interface IStorybookFormProviderProps<S extends ZodTypeAny> {
  children: ReactNode
  validationSchema: S
  defaultValues?: DefaultValues<TypeOf<S>>
}

export const StorybookFormProvider = <S extends ZodTypeAny>({
  children,
  validationSchema,
  defaultValues
}: IStorybookFormProviderProps<S>) => {
  const formMethods = useControlledForm({
    mode: 'all',
    schema: validationSchema,
    defaultValues
  })

  const onSubmit = <T extends FieldValues>(values: T) => {
    toast.success(mockToastMessage(JSON.stringify(values)), {
      position: 'top-center',
      duration: 5000
    })
  }

  useEffect(() => {
    formMethods.reset(defaultValues)
  }, [defaultValues, formMethods])

  return (
    <FormProvider {...formMethods}>
      <form className='flex flex-col gap-5' onSubmit={formMethods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}
