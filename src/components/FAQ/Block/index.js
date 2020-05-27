import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';

import useStyles from './styles';

const Block = props => {
  const classes = useStyles(props);

  return (
    <ExpansionPanel
      {...props}
      classes={{ root: classes.root, expanded: classes.expanded }}
    />
  );
};

export default Block;
