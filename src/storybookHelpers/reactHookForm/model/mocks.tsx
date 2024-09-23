import { z } from 'zod'
import { MOCK_RADIO_GROUP, MOCK_SELECT_OPTIONS } from './mockData'
import { EnumFieldType, type TStorybookFieldConfig } from './types'
import { VALIDATION_MESSAGES } from '$/shared/validation'

export const mockToastMessage = (values: string) => (
  <div className='flex flex-col'>
    <p className='desk-body-regular-l'>Форма успешно отправлена</p>
    <code className='desk-body-regular-m text-color-tetriary'>{values}</code>
  </div>
)

export const mockSchema = z.object({
  city: z.string({ required_error: VALIDATION_MESSAGES.REQUIRED }).min(3, `${VALIDATION_MESSAGES.MIN_LENGTH} 3`),
  phone: z.string({ required_error: VALIDATION_MESSAGES.REQUIRED }).min(7, `${VALIDATION_MESSAGES.MIN_LENGTH} 7`),
  fio: z.string({ required_error: VALIDATION_MESSAGES.REQUIRED }),
  condition: z.literal<boolean>(true, { errorMap: () => ({ message: VALIDATION_MESSAGES.REQUIRED }) }),
  sex: z.string().min(2, VALIDATION_MESSAGES.REQUIRED),
  percent: z.literal<boolean>(true, { errorMap: () => ({ message: VALIDATION_MESSAGES.REQUIRED }) }),
  months: z.string().or(z.array(z.string())),
  description: z.string().min(3, `${VALIDATION_MESSAGES.MIN_LENGTH} 3`)
})

export type TMockSchema = z.infer<typeof mockSchema>
export const mockDefaultValues: TMockSchema = {
  city: '',
  phone: '',
  fio: '',
  condition: true,
  sex: '',
  percent: true,
  months: '',
  description: ''
}

export const mockFields: TStorybookFieldConfig<TMockSchema>[] = [
  { name: 'city', label: 'Город', fieldType: EnumFieldType.INPUT },
  { name: 'phone', label: 'Номер телефона', fieldType: EnumFieldType.MASK, format: '# (###) ###-##-##' },
  { name: 'fio', label: 'ФИО', fieldType: EnumFieldType.DADATA },
  {
    name: 'condition',
    label:
      'Выражаю согласие на обработку персональных данных и подтверждаю, что ознакомлен с Политикой обработки персональных данных',
    fieldType: EnumFieldType.CHECKBOX
  },
  {
    name: 'sex',
    groupName: 'Выберите пол',
    radioItemsGroup: MOCK_RADIO_GROUP,
    fieldType: EnumFieldType.RADIO
  },
  { name: 'percent', label: 'Увеличенный процент', fieldType: EnumFieldType.SWITCH },
  {
    name: 'months',
    label: 'Выберите месяц',
    fieldType: EnumFieldType.SELECT,
    optionsList: MOCK_SELECT_OPTIONS
  },
  {
    name: 'description',
    label: 'Описание к блоку',
    fieldType: EnumFieldType.TEXTAREA
  }
]
