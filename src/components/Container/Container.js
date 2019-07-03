import React from 'react';
import Container from '@material-ui/core/Container';

const ContainerComponent = React.memo(props => {
  return <Container {...props} />;
});

export default ContainerComponent;
