import React from 'react';

const ComponentComponent = React.memo(props => {
  return <input {...props} />;
});

export default ComponentComponent;
