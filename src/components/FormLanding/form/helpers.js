export const checkUnTouchedFields = fields => {
  const fieldsToSubmit = {};
  const fieldsWithError = {};
  let validForm = true;

  Object.keys(fields).forEach(fieldKey => {
    const field = fields[fieldKey];

    fieldsToSubmit[fieldKey] = field.value;
    if (!field.touched) {
      const error = field.validate(field.value);

      if (error) {
        validForm = false;
        fieldsWithError[fieldKey] = {
          ...field,
          error,
          helperText: error,
        };
      }
    }

    return;
  });

  return { fieldsToSubmit, fieldsWithError, validForm };
};

export const updateFieldsErrors = (errors, fields) => {
  const nextFields = { ...fields };
  Object.keys(errors).forEach(fieldKey => {
    nextFields[fieldKey] = {
      ...fields[fieldKey],
      error: !!errors[fieldKey],
      helperText: errors[fieldKey],
    };
  });
  return nextFields;
};

export const updateFieldsValues = (values, fields) => {
  const nextFields = { ...fields };

  Object.keys(values).forEach(fieldKey => {
    nextFields[fieldKey] = { ...fields[fieldKey], value: values[fieldKey] };
  });

  return nextFields;
};

const getFieldErrors = errorsObj =>
  Object.keys(errorsObj).reduce((prev, cur) => {
    prev[cur] = Boolean(errorsObj[cur]);
    return prev;
  }, {});

export const getErrorProp = fieldError => {
  return typeof fieldError === 'object' && fieldError !== null
    ? getFieldErrors(fieldError)
    : Boolean(fieldError);
};

export const getHelperTextFromError = (error, prevHelperText = '') => {
  if (typeof error === 'object' && error !== null) {
    return Object.keys(error).length
      ? { ...prevHelperText, ...error }
      : prevHelperText;
  }
  return error ? error : prevHelperText;
};
