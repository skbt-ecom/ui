import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {},
  label: {
    fontFamily: '"Bebas", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const ButtonComponent = ({ children, ...props }) => {
  const classes = useStyles(props);

  return (
    <Button
      {...props}
      classes={{
        root: classes.root,
        label: classes.label,
      }}
    >
      {children}
    </Button>
  );
};

ButtonComponent.defaultProps = {
  variant: 'contained',
};

export default ButtonComponent;
