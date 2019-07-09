import React from 'react';
import Link from '@material-ui/core/Link';

const LinkComponent = React.memo(props => {
  return <Link {...props} />;
});

export default LinkComponent;
