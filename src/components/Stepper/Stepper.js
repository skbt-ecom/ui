import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

function StepConnector(props) {
  return <div className={props.className} />;
}

const StepperComponent = React.memo(props => {
  const classes = useStyles();

  return (
    <Stepper
      activeStep={1}
      orientation="vertical"
      connector={<StepConnector className={classes.connector} />}
    >
      {props.steps.map(({ label, content }) => (
        <Step key={label}>
          <StepLabel
            classes={{
              label: classes.label,
              iconContainer: classes.iconContainer,
            }}
          >
            {label}
          </StepLabel>
          <StepContent classes={{ root: classes.content }}>
            {content}
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
});

export default StepperComponent;
