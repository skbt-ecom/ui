import React, { useState, useRef } from "react"

import { action } from "@storybook/addon-actions"
import { muiTheme } from "storybook-addon-material-ui"

import theme from "../../style/theme"
import themeHalva from "../../style/themeHalva"
import Grid from "../Grid"

import FormLanding from "./FormLanding"

// import AcceptmentField from './fields/AcceptmentField';
import AutocompleteField from "./fields/AutocompleteField"
import AutocompleteRegionByPhoneField from "./fields/AutocompleteRegionByPhoneField"
import CheckboxField from "./fields/CheckboxField"
import DadataAddress from "./fields/DadataFields/DadataAddress"
import DadataAddressFlat from "./fields/DadataFields/DadataAddressFlat"
import DadataFio from "./fields/DadataFields/DadataFio"
import DadataAuto from "./fields/DadataFields/DadataAuto"
import DateField from "./fields/DateField"
// import EmailField from './fields/EmailField';
import MaskedField from "./fields/MaskedField"
import PhoneField from "./fields/PhoneField"
import RadioGroupField from "./fields/RadioGroupField"
// import SelectField from './fields/SelectField';
import SliderLogarithmic from "./fields/SliderLogarithmic"
import SubmitButton from "./fields/SubmitButton"
import SwitchField from "./fields/SwitchField"
import TextField from "./fields/TextField"
import PickersProvider from "../PickersProvider"
import DatePicker from "./fields/DatePicker"
import TimePicker from "./fields/TimePicker"
import AcceptmentField from "./fields/AcceptmentField"

import REGIONS from "../../enums/regions"

import { requiredValidator } from "./validators/requiredValidator"
import lengthValidator from "./validators/lengthValidator"

const DADATA_ADDRESS_FLAT_REGEXP = /(.*?)\s*, кв (\d+(?:[/-]\d+)?)?$/
const GENDERS = [
  { value: "m", label: "Мужской" },
  { value: "f", label: "Женский" },
]

function onSubmit(values) {
  console.log("values", values)
}

function validateByLength(len) {
  return value => lengthValidator(value, len)
}

export default {
  title: "FormLanding",
  decorators: [muiTheme([theme])],
}

export function Acceptment() {
  return (
    <FormLanding onChangeFields={action("onChangeFields")} onSubmit={onSubmit}>
      <AcceptmentField name="agree" color="primary" />
      <SubmitButton>Отправить</SubmitButton>
    </FormLanding>
  )
}

export function CreditAmountSlider() {
  return (
    <FormLanding onChangeFields={action("onChangeFields")} onSubmit={onSubmit}>
      <SliderLogarithmic name={"sum"} label={"Сумма кредита"} min={150000} max={30000000} />
      <SubmitButton
      // classes={{ container: 'styles.buttonWrapper' }}
      >
        Отправить
      </SubmitButton>
    </FormLanding>
  )
}

export function DadataFields() {
  return (
    <FormLanding onChangeFields={action("onChangeFields")} onSubmit={onSubmit}>
      <DadataAddress name="address2" label="Адрес" />
      <DadataFio name="fio" label="ФИО" />
      <DadataAddressFlat name="addressWithFlat" label="Адрес новый" />
      <DadataAuto name="auto" label="Модель машины" />
      <SubmitButton>Отправить</SubmitButton>
    </FormLanding>
  )
}

export function FormWrapper() {
  const formRef = React.useRef(null)

  return (
    <FormLanding onChangeFields={action("onChangeFields")} onSubmit={onSubmit} ref={formRef}>
      <button onClick={() => formRef.current.setFields({ text: { value: 1234 } })}>setValue</button>
      <button onClick={() => console.log(formRef.current.getFieldsValue())}>getValue</button>
      <TextField name={"text"} validate={requiredValidator} />
      <SubmitButton>Отправить</SubmitButton>
    </FormLanding>
  )
}

export function FormPassport() {
  const [isChangedCredentials, setIsChangedCredentials] = useState(false)
  const [isDifferentAddress, setIsDifferentAddress] = useState(false)
  const refForm = useRef(null)

  const onChangeFields = {
    changedCredentials: fieldData => {
      const { value } = fieldData
      refForm.current.setField("oldFio", { isRequired: value })
      setIsChangedCredentials(value)
    },
    differentAddress: fieldData => {
      const { value } = fieldData
      refForm.current.setField("lifeAddress", { isRequired: !value })
      setIsDifferentAddress(!value)
    },
  }

  return (
    <FormLanding onSubmit={onSubmit} onChangeFields={onChangeFields} ref={refForm}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h2>Паспортные данные</h2>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Место рождения"
            name="birthPlace"
            helperText="В точности, как в паспорте"
            validate={requiredValidator}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <MaskedField
            label="Серия"
            name="passportSeries"
            mask="0000"
            defaultValue=""
            validate={validateByLength(4)}
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <MaskedField
            label="Номер"
            name="passportNumber"
            mask="000000"
            defaultValue=""
            validate={validateByLength(6)}
            fullWidth
          />
        </Grid>
        <Grid item sm={4} className="hide-xs">
          &nbsp;
        </Grid>
        <Grid item xs={12} sm={4}>
          <MaskedField
            label="Код"
            name="passportCode"
            mask="000-000"
            defaultValue=""
            validate={validateByLength(7)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Кем выдан"
            name="passportOrgan"
            defaultValue=""
            validate={requiredValidator}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <DateField label="Дата выдачи" name="passportDate" defaultValue="" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <RadioGroupField items={GENDERS} label="Ваш пол:" name="gender" defaultValue="m" />
        </Grid>
        <Grid item xs={12}>
          <SwitchField
            label="Я менял Фамилию, Имя или Отчество "
            name="changedCredentials"
            defaultValue={false}
            validateOnBlur={false}
          />
        </Grid>
        {isChangedCredentials && (
          <Grid item xs={12}>
            <DadataFio label="Фамилия Имя Отчество" name="oldFio" helperText="Предыдущие ФИО" />
          </Grid>
        )}
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <h2>Адрес регистрации</h2>
        </Grid>
        <Grid item xs={12}>
          <DadataAddressFlat
            name="registrationAddress"
            incomingValue=""
            regexp={DADATA_ADDRESS_FLAT_REGEXP}
          />
        </Grid>
        <Grid item xs={12}>
          <h2>Адрес фактического проживания</h2>
        </Grid>
        <Grid item xs={12}>
          <CheckboxField
            name="differentAddress"
            label="Совпадает с адресом регистрации"
            color="primary"
            defaultValue={!isDifferentAddress}
            validateOnBlur={false}
          />
        </Grid>
        {isDifferentAddress && (
          <Grid item xs={12}>
            <DadataAddressFlat
              name="lifeAddress"
              incomingValue=""
              regexp={DADATA_ADDRESS_FLAT_REGEXP}
            />
          </Grid>
        )}
        <Grid item xs={12} className="text-center">
          <SubmitButton>Далее</SubmitButton>
        </Grid>
      </Grid>
    </FormLanding>
  )
}

export function Pickers() {
  return (
    <FormLanding onSubmit={onSubmit} onChangeFields={action("onChangeFields")}>
      <PickersProvider>
        <DatePicker name="date" />
        <TimePicker name="time" />
      </PickersProvider>
      <SubmitButton>Отправить</SubmitButton>
    </FormLanding>
  )
}

export function PickersHalva() {
  return (
    <FormLanding onSubmit={onSubmit} onChangeFields={action("onChangeFields")}>
      <PickersProvider>
        <DatePicker name="date" />
        <TimePicker name="time" />
      </PickersProvider>
      <SubmitButton>Отправить</SubmitButton>
    </FormLanding>
  )
}

PickersHalva.story = {
  decorators: [muiTheme([themeHalva])],
}

export function RegionByPhone() {
  const formRef = React.useRef(null)
  const [phone, setPhone] = React.useState("")

  const onChangeFields = (data, fieldKey) => {
    if (fieldKey === "phone") {
      setPhone(data["phone"].value)
    }
  }

  return (
    <FormLanding onChangeFields={onChangeFields} onSubmit={onSubmit} ref={formRef}>
      <PhoneField name={"phone"} label={"Телефон"} placeholder={"+7 (000) 000-00-00"} fullWidth />
      <AutocompleteRegionByPhoneField
        name={"region"}
        label={"Регион"}
        phone={phone}
        apiUrl={"http://urt-web-app1:4000/"}
      />
      <SubmitButton>Отправить</SubmitButton>
    </FormLanding>
  )
}
