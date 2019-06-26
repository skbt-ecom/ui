import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ButtonComponent = ({ children, ...props }) => {
  return (
    <Typography component="span">
      <Button {...props} fontFamily="Bebas">
        {children}
      </Button>
    </Typography>
  );
};

ButtonComponent.defaultProps = {
  variant: 'contained',
};

export default ButtonComponent;
