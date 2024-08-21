import type { FieldValues } from 'react-hook-form'
import type {
  ICheckboxControlProps,
  IDadataInputControlProps,
  InputControlMaskProps,
  InputControlProps,
  IRadioControlProps
} from '$/shared/ui/formControlElements'

export enum EnumFieldType {
  INPUT = 'input',
  MASK = 'mask',
  DADATA = 'dadata',
  CHECKBOX = 'checkbox',
  RADIO = 'radio'
}

type TControlledInput<T extends FieldValues> = Omit<InputControlProps<T>, 'control'> & { fieldType: EnumFieldType.INPUT }
type TControlledInputMask<T extends FieldValues> = Omit<InputControlMaskProps<T>, 'control'> & { fieldType: EnumFieldType.MASK }
type TControlledInputDadata<T extends FieldValues> = Omit<IDadataInputControlProps<T>, 'control'> & {
  fieldType: EnumFieldType.DADATA
}
type TControlledInputCheckbox<T extends FieldValues> = Omit<ICheckboxControlProps<T>, 'control'> & {
  fieldType: EnumFieldType.CHECKBOX
}
type TControlledInputRadio<T extends FieldValues> = Omit<IRadioControlProps<T>, 'control'> & {
  fieldType: EnumFieldType.RADIO
}

export type TStorybookFieldConfig<T extends FieldValues> =
  | TControlledInputMask<T>
  | TControlledInput<T>
  | TControlledInputDadata<T>
  | TControlledInputCheckbox<T>
  | TControlledInputRadio<T>
