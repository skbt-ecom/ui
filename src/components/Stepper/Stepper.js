import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const StepperComponent = React.memo(props => {
  const classes = useStyles();

  return (
    <Stepper activeStep={1} orientation="vertical">
      {props.steps.map(({ label, content }) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
          <StepContent>
            <Typography>{content}</Typography>
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
});

export default StepperComponent;
