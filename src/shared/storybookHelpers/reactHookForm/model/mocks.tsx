import type { FieldValues } from 'react-hook-form'
import { z } from 'zod'
import { VALIDATION_MESSAGES } from '@/shared/validation'
import type { InputControlMaskProps, InputControlProps } from '$/shared/ui/formControl'

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
  surname: z.string({ required_error: VALIDATION_MESSAGES.REQUIRED }).min(3, `${VALIDATION_MESSAGES.MIN_LENGTH} 3`),
  city: z.string({ required_error: VALIDATION_MESSAGES.REQUIRED }).min(7, `${VALIDATION_MESSAGES.MIN_LENGTH} 7`),
  phone: z.string({ required_error: VALIDATION_MESSAGES.REQUIRED }).min(7, `${VALIDATION_MESSAGES.MIN_LENGTH} 7`)
})

export type TMockSchema = z.infer<typeof mockSchema>

export const mockDefaultValues: TMockSchema = {
  surname: '',
  city: '',
  phone: ''
}

export const mockFields: TStorybookFieldConfig<TMockSchema>[] = [
  { name: 'surname', label: 'Фамилия', fieldType: EnumFieldType.INPUT },
  { name: 'city', label: 'Город', fieldType: EnumFieldType.INPUT },
  { name: 'phone', label: 'Номер телефона', fieldType: EnumFieldType.MASK, format: '# (###) ###-##-##' }
]

export const mockToastMessage = (values: string) => (
  <div className='flex flex-col'>
    <p className='desk-body-regular-l'>Форма успешно отправлена</p>
    <code className='desk-body-regular-m text-color-tetriary'>{values}</code>
  </div>
)
