import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonComponent = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

ButtonComponent.defaultProps = {
  variant: 'contained',
};

export default ButtonComponent;
