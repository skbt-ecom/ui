import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';
import Grid from '../Grid';
import { Form } from './form/Form';
import { TextField } from './wrappedFields';

const FIELDS_CONFIG = {
  fio: props => <TextField label={'ФИО'} {...props} />,
  // email: <TextField label={'E-mail'} />,
};

const renderField = (field, index) => (
  <Grid item xs={12} key={index}>
    {FIELDS_CONFIG[field]()}
    {/* <TextField
      label={'Место рождения'}
      name={'birthPlace'}
      defaultValue={''}
      helperText={'В точности, как в паспорте'}
      // validate={requiredValidator}
      fullWidth
    /> */}
  </Grid>
);

const FormLanding = React.memo(props => {
  const { title, fields } = props.config;

  const onChangeFields = updates => {};

  const onSubmit = () => {};

  return (
    <Container>
      <Form onSubmit={onSubmit} onChangeFields={onChangeFields}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <h2>{title}</h2>
          </Grid>
          {fields.map(renderField)}
        </Grid>
      </Form>
    </Container>
  );
});

FormLanding.propTypes = {
  config: PropTypes.shape({
    title: PropTypes.node,
    fields: PropTypes.array.isRequired,
  }),
};

export default FormLanding;
