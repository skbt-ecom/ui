import React from 'react';
import PropTypes from 'prop-types';

import { Form } from './FormContext/Form';

import useStyles from './styles';

const FormLanding = (props, ref) => {
  const classes = useStyles(props);

  return (
    <div className={classes.container}>
      <Form
        onSubmit={props.onSubmit}
        onChangeFields={props.onChangeFields}
        ref={ref}
      >
        {React.Children.map(props.children, child => (
          <div
            className={`${classes.fieldWrapper} ${
              child.type.displayName === 'Acceptment'
                ? classes.fieldWrapperAcceptment
                : ''
            }`}
          >
            {child}
          </div>
        ))}
      </Form>
    </div>
  );
};

const ForwardedComponent = React.forwardRef(FormLanding);

export default React.memo(ForwardedComponent);
