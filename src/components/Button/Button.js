import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  label: {
    fontFamily: '"Bebas", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const ButtonComponent = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Button
      classes={{
        label: classes.label, // class name, e.g. `classes-nesting-label-x`
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

ButtonComponent.defaultProps = {
  variant: 'contained',
};

export default ButtonComponent;
