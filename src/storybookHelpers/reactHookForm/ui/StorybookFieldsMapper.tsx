import { type Control, type DefaultValues, type FieldValues, useFormContext } from 'react-hook-form'
import type { Schema, TypeOf } from 'zod'
import type { TStorybookFieldConfig } from '../model/types'
import { Button, CheckboxControl, DadataInputControl, InputControl, InputControlMask, RadioControl } from '$/shared/ui'

type TStorybookFieldsMapperProps<T extends FieldValues> = {
  fields: TStorybookFieldConfig<T>[]
  defaultValues?: DefaultValues<TypeOf<Schema>>
  btnSubmit?: string
  btnReset?: string
}

const renderFields = <T extends FieldValues>(fieldConfig: TStorybookFieldConfig<T>, control: Control<FieldValues>) => {
  const { name, label, fieldType } = fieldConfig
  switch (fieldType) {
    case 'input':
      return <InputControl name={name} label={label} control={control} badge='+25%' />
    case 'mask':
      const { format, mask } = fieldConfig
      return <InputControlMask name={name} label={label} format={format} control={control} mask={mask} />
    case 'dadata':
      return <DadataInputControl name={name} label={label} control={control} badge='+25%' />
    case 'checkbox':
      const { defaultChecked } = fieldConfig
      return <CheckboxControl name={name} label={label} control={control} defaultChecked={defaultChecked} />
    case 'radio':
      const { radioItemsGroup } = fieldConfig
      return <RadioControl name={name} label={label} control={control} radioItemsGroup={radioItemsGroup} />
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
