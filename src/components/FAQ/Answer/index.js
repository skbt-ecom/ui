import React from 'react';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import useStyles from './styles';

const Answer = props => {
  const classes = useStyles(props);

  return (
    <ExpansionPanelDetails classes={{ root: classes.root }}>
      <p className={classes.text}>{props.children}</p>
    </ExpansionPanelDetails>
  );
};

export default Answer;
