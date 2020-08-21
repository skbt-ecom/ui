import React from 'react';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import useStyles from './styles';

const Answer = props => {
  const classes = useStyles(props);

  return (
    <AccordionDetails classes={{ root: classes.root }}>
      <p className={classes.text}>{props.children}</p>
    </AccordionDetails>
  );
};

export default Answer;
