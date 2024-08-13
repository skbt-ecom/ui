import type { FieldValues } from 'react-hook-form'
import { z } from 'zod'
import type { InputControlMaskProps, InputControlProps } from '$/shared/ui/formControlElements'
import { VALIDATION_MESSAGES } from '$/shared/validation'

enum EnumFieldType {
  INPUT = 'input',
  MASK = 'mask'
}

type TControlledInput<T extends FieldValues> = Omit<InputControlProps<T>, 'control'> & { fieldType: EnumFieldType.INPUT }
type TControlledInputMask<T extends FieldValues> = Omit<InputControlMaskProps<T>, 'control'> & {
  fieldType: EnumFieldType.MASK
}

export type TStorybookFieldConfig<T extends FieldValues> = TControlledInputMask<T> | TControlledInput<T>

export const mockSchema = z.object({
  city: z.string({ required_error: VALIDATION_MESSAGES.REQUIRED }).min(3, `${VALIDATION_MESSAGES.MIN_LENGTH} 3`),
  phone: z.string({ required_error: VALIDATION_MESSAGES.REQUIRED }).min(7, `${VALIDATION_MESSAGES.MIN_LENGTH} 7`)
})

export type TMockSchema = z.infer<typeof mockSchema>

export const mockDefaultValues: TMockSchema = {
  city: '',
  phone: ''
}

export const mockFields: TStorybookFieldConfig<TMockSchema>[] = [
  { name: 'city', label: 'Город', fieldType: EnumFieldType.INPUT },
  { name: 'phone', label: 'Номер телефона', fieldType: EnumFieldType.MASK, format: '# (###) ###-##-##' }
]

export const mockToastMessage = (values: string) => (
  <div className='flex flex-col'>
    <p className='desk-body-regular-l'>Форма успешно отправлена</p>
    <code className='desk-body-regular-m text-color-tetriary'>{values}</code>
  </div>
)
