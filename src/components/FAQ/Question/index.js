import React from 'react';

import Typography from '@material-ui/core/Typography';
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
      <Typography variant="h4" className={classes.text}>
        {props.children}
      </Typography>
    </AccordionSummary>
  );
};

export default Question;
