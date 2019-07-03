import React from 'react';
import Button from '@material-ui/core/Button';

import useStyles from './styles';

const ButtonComponent = React.memo(props => {
  const classes = useStyles(props);

  return (
    <Button
      {...props}
      classes={{
        root: classes.root,
        label: classes.label,
      }}
    />
  );
});

ButtonComponent.defaultProps = {
  variant: 'contained',
};

export default ButtonComponent;
