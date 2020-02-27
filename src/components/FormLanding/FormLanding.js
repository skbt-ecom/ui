import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';
import { Form } from './FormContext/Form';

const FormLanding = React.memo(props => {
  const onChangeFields = updates => {
    console.log('updates', updates);
    props.onChangeFields(updates);
  };

  const onSubmit = values => {
    props.onSubmit(values);
  };

  return (
    <Container>
      <Form onSubmit={onSubmit} onChangeFields={onChangeFields}>
        {props.children}
      </Form>
    </Container>
  );
});

FormLanding.propTypes = {};

export default FormLanding;
