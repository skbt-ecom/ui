import { type Control, type DefaultValues, type FieldValues, useFormContext } from 'react-hook-form'
import type { Schema, TypeOf } from 'zod'
import { EnumFieldType, type TStorybookFieldConfig } from '../model/types'
import {
  Button,
  CheckboxControl,
  DadataInputControl,
  InputControl,
  InputControlMask,
  RadioControl,
  SelectControl,
  SwitchControl,
  TextareaControl
} from '$/shared/ui'

type TStorybookFieldsMapperProps<T extends FieldValues> = {
  fields: TStorybookFieldConfig<T>[]
  defaultValues?: DefaultValues<TypeOf<Schema>>
  btnSubmit?: string
  btnReset?: string
}

const renderFields = <T extends FieldValues>(fieldConfig: TStorybookFieldConfig<T>, control: Control<FieldValues>) => {
  const { name, label, fieldType } = fieldConfig
  switch (fieldType) {
    case EnumFieldType.INPUT:
      return <InputControl name={name} label={label} control={control} badge='+25%' />
    case EnumFieldType.MASK:
      const { format, mask } = fieldConfig
      return <InputControlMask name={name} label={label} format={format} control={control} mask={mask} />
    case EnumFieldType.DADATA:
      return <DadataInputControl name={name} label={label} control={control} badge='+25%' />
    case EnumFieldType.CHECKBOX:
      const { defaultChecked } = fieldConfig
      return <CheckboxControl name={name} label={label} control={control} defaultChecked={defaultChecked} />
    case EnumFieldType.RADIO:
      const { radioItemsGroup } = fieldConfig
      return <RadioControl name={name} label={label} control={control} radioItemsGroup={radioItemsGroup} />
    case EnumFieldType.SWITCH:
      return <SwitchControl name={name} label={label} control={control} />
    case EnumFieldType.SELECT:
      const { optionsList } = fieldConfig
      return <SelectControl name={name} label={label} control={control} optionsList={optionsList} />
    case EnumFieldType.TEXTAREA:
      return <TextareaControl name={name} label={label} control={control} />
    default:
      return null
  }
}

export const StorybookFieldsMapper = <T extends FieldValues>({
  fields,
  defaultValues,
  btnSubmit = 'Отправить',
  btnReset = 'Сбросить состояние'
}: TStorybookFieldsMapperProps<T>) => {
  const { control, clearErrors, reset } = useFormContext()

  const resetStates = () => {
    clearErrors()
    reset(defaultValues)
  }

  return (
    <div className='flex flex-col gap-3 w-[600px]'>
      {fields?.map((field) => <div key={field.name}>{renderFields(field, control)}</div>)}
      <div className='flex items-center gap-6'>
        {btnSubmit && <Button type='submit'>{btnSubmit}</Button>}
        {btnReset && (
          <Button onClick={resetStates} intent='secondary'>
            Сбросить состояние
          </Button>
        )}
      </div>
    </div>
  )
}
