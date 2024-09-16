import type { FieldValues } from 'react-hook-form'
import type {
  ICheckboxControlProps,
  IDadataInputControlProps,
  InputControlMaskProps,
  InputControlProps,
  InputSliderControlProps,
  IRadioControlProps,
  ISelectControlProps,
  ISwitchControlProps
} from '$/shared/ui/formControlElements'

export enum EnumFieldType {
  INPUT = 'input',
  MASK = 'mask',
  DADATA = 'dadata',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  SWITCH = 'switch',
  SELECT = 'select'
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

type TControlledInputSwitch<T extends FieldValues> = Omit<ISwitchControlProps<T>, 'control'> & {
  fieldType: EnumFieldType.SWITCH
}

type TControlledInputSelect<T extends FieldValues> = Omit<ISelectControlProps<T>, 'control'> & {
  fieldType: EnumFieldType.SELECT
}

type TControlledInputSlider<T extends FieldValues> = Omit<InputSliderControlProps<T>, 'control'> & {
  fieldType: EnumFieldType.SELECT
}

export type TStorybookFieldConfig<T extends FieldValues> =
  | TControlledInputMask<T>
  | TControlledInput<T>
  | TControlledInputDadata<T>
  | TControlledInputCheckbox<T>
  | TControlledInputRadio<T>
  | TControlledInputSwitch<T>
  | TControlledInputSelect<T>
  | TControlledInputSlider<T>
