import React, { useState, useRef } from "react"

import { action } from "@storybook/addon-actions"

import { subYears, parse } from "date-fns"

import Grid from "@material-ui/core/Grid"

import FormLanding from "./FormLanding"

// import AutocompleteField from "./fields/AutocompleteField"
import AutocompleteRegionByPhoneField from "./fields/AutocompleteRegionByPhoneField"
import CheckboxField from "./fields/CheckboxField"
import DadataAddress from "./fields/DadataFields/DadataAddress"
import DadataOrganization from "./fields/DadataFields/DadataOrganization"
import DadataAddressFlat from "./fields/DadataFields/DadataAddressFlat"
import DadataFio from "./fields/DadataFields/DadataFio"
import DadataAuto from "./fields/DadataFields/DadataAuto"
import DateField from "./fields/DateField"
import EmailField from "./fields/EmailField"
import MaskedField from "./fields/MaskedField"
import RadioGroupField from "./fields/RadioGroupField"
import PhoneField from "./fields/PhoneField"
// import SelectField from './fields/SelectField';
import SliderLogarithmic from "./fields/SliderLogarithmic"
import SubmitButton from "./fields/SubmitButton"
import SwitchField from "./fields/SwitchField"
import TextField from "./fields/TextField"
import PickersProvider from "../PickersProvider"
import DatePicker from "./fields/DatePicker"
import TimePicker from "./fields/TimePicker"
import AcceptmentField from "./fields/AcceptmentField"

// import REGIONS from "../../enums/regions"
import formatToRequest from "../../helpers/formatToRequest"

import requiredValidator from "./validators/required"
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
  return (value) => lengthValidator(value, len)
}

const story = {
  title: "FormLanding",
}
export default story

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
      <SliderLogarithmic name="sum" label="Сумма кредита" min={150000} max={30000000} />
      <SubmitButton
      // classes={{ container: 'styles.buttonWrapper' }}
      >
        Отправить
      </SubmitButton>
    </FormLanding>
  )
}
export function DadataFieldsTemplate(props) {
  function handleSubmit(values) {
    console.log(values)
    const fieldsType = {
      fio: "fio",
      oldFio: "fio",
      // address2: "dadataAddress",
      // addressWithFlat: "dadataAddressFlat",
    }
    const fromattedValues = formatToRequest(values, fieldsType)
    console.log(fromattedValues)
  }

  return (
    <FormLanding {...props} onChangeFields={action("onChangeFields")} onSubmit={handleSubmit}>
      <DadataFio name="fio" label="ФИО" />
      <DadataFio name="oldFio" label="Предыдущий ФИО" />
      <DadataAddress name="address2" label="Адрес" />
      <DadataOrganization name="organization" label="Организация" isRequired />
      <DadataAddressFlat name="addressWithFlat" label="Адрес новый" />
      <DadataAuto name="auto" label="Модель машины" />
      <SubmitButton>Отправить</SubmitButton>
    </FormLanding>
  )
}
export const DadataFields = DadataFieldsTemplate.bind({})
DadataFields.args = {
  name: "employmentForm",
}

export function FormWrapper() {
  const formRef = React.useRef(null)

  return (
    <FormLanding onChangeFields={action("onChangeFields")} onSubmit={onSubmit} ref={formRef}>
      <button
        type="button"
        onClick={() => formRef.current.setFields({ text: { value: 1234 } })}
        style={{ marginBottom: 10 }}
      >
        setValue
      </button>
      <button
        type="button"
        onClick={() => console.log(formRef.current.getFieldsValue())}
        style={{ marginBottom: 10 }}
      >
        getValue
      </button>
      <TextField name="text" validate={requiredValidator} />
      <button
        type="button"
        onClick={() => formRef.current.setFields({ address2: { value: "" } })}
        style={{ marginBottom: 10 }}
      >
        resetValue
      </button>
      <DadataAddress name="address2" label="Адрес" />
      <SubmitButton>Отправить</SubmitButton>
    </FormLanding>
  )
}

export function FormPassport() {
  const [isChangedCredentials, setIsChangedCredentials] = useState(false)
  const [isDifferentAddress, setIsDifferentAddress] = useState(false)
  const refForm = useRef(null)

  const onChangeFields = {
    changedCredentials: (fieldData) => {
      const { value } = fieldData
      refForm.current.setField("oldFio", { isRequired: value })
      setIsChangedCredentials(value)
    },
    differentAddress: (fieldData) => {
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
  const MAX_DATE = subYears(Date.now(), 20)
  const MIN_DATE = subYears(Date.now(), 85)
  const datePickerDefValue = parse("19.09.1992", "dd.MM.yyyy", new Date())

  return (
    <FormLanding onSubmit={onSubmit} onChangeFields={action("onChangeFields")}>
      <PickersProvider>
        <DatePicker
          name="birthDate"
          label="Дата рождения"
          maxDate={MAX_DATE}
          minDate={MIN_DATE}
          initialFocusedDate={datePickerDefValue}
          disablePast={false}
          openTo="year"
          views={["year", "date"]}
          defaultValue={datePickerDefValue}
        />
        <TimePicker name="time" />
      </PickersProvider>
      <SubmitButton>Отправить</SubmitButton>
    </FormLanding>
  )
}

export function RegionByPhone() {
  const formRef = React.useRef(null)
  const [phone, setPhone] = React.useState("")

  const onChangeFields = (data, fieldKey) => {
    if (fieldKey === "phone") {
      setPhone(data.phone.value)
    }
  }

  return (
    <FormLanding onChangeFields={onChangeFields} onSubmit={onSubmit} ref={formRef}>
      <PhoneField name="phone" label="Телефон" placeholder="+7 (000) 000-00-00" fullWidth />
      <AutocompleteRegionByPhoneField
        name="region"
        label="Регион"
        phone={phone}
        apiUrl="http://urt-web-app1:4000/"
      />
      <SubmitButton>Отправить</SubmitButton>
    </FormLanding>
  )
}

export function MaskedFields() {
  function handleSubmit(values) {
    console.log(values)
    const fieldsType = {
      birthdate: "date",
      phone: "phone",
    }
    const fromattedValues = formatToRequest(values, fieldsType)
    console.log(fromattedValues)
  }

  return (
    <FormLanding onSubmit={handleSubmit}>
      <EmailField name="email" label="Email" />
      <PhoneField name="phone" label="Телефон" />
      <DateField name="birthdate" label="Дата рождения" />
      <SubmitButton>Отправить</SubmitButton>
    </FormLanding>
  )
}
