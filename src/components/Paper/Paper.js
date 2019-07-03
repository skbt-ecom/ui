import React from 'react';
import Paper from '@material-ui/core/Paper';

import useStyles from './styles';

const PaperComponent = React.memo(props => {
  const classes = useStyles(props);

  return (
    <Paper
      {...props}
      classes={{
        root: classes.root,
      }}
    />
  );
});

export default PaperComponent;
