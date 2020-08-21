import React from 'react';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './styles';

const Question = props => {
  const classes = useStyles(props);

  return (
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        expandIcon: classes.expandIcon,
      }}
    >
      <p className={classes.text}>{props.children}</p>
    </AccordionSummary>
  );
};

export default Question;
