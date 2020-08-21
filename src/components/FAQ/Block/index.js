import React from 'react';
import Accordion from '@material-ui/core/Accordion';

import useStyles from './styles';

const Block = props => {
  const classes = useStyles(props);

  return (
    <Accordion
      {...props}
      classes={{ root: classes.root, expanded: classes.expanded }}
    />
  );
};

export default Block;
