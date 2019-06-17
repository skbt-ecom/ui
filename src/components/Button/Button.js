import React from 'react';

const ButtonComponent = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default ButtonComponent;
