import React from 'react';
import Container from '@material-ui/core/Container';

const ContainerComponent = React.memo(props => {
  return <Container maxWidth={'lg'} fixed {...props} />;
});

export default ContainerComponent;
