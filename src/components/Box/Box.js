import React from 'react';
import Box from '@material-ui/core/Button';

const BoxComponent = React.memo(props => {
  return <Box {...props} />;
});

export default BoxComponent;
