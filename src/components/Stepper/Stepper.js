import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import StepConnector from '@material-ui/core/StepConnector';
import cn from 'classnames';

import useStyles from './styles';

function StepperComponent(props) {
  const classes = useStyles(props);
  const { orientation, steps, className, activeStep } = props;
  const isVertical = orientation === 'vertical';

  return (
    <Stepper
      activeStep={activeStep}
      connector={<StepConnector />}
      classes={{
        root: cn(classes.stepper, className),
        horizontal: classes.connectorHorizontal,
        vertical: classes.connectorVertical,
      }}
      orientation={orientation}
    >
      {steps.map(({ label, content }) => (
        <Step key={label}>
          <StepLabel
            classes={{
              label: isVertical
                ? classes.labelVertical
                : classes.labelHorizontal,
              iconContainer: cn(
                classes.iconContainer,
                isVertical ? '' : classes.iconContainerHorizontal
              ),
            }}
            optional={
              isVertical ? null : (
                <Typography className={classes.contentHorizontal}>
                  {content}
                </Typography>
              )
            }
          >
            {label}
          </StepLabel>
          {isVertical && (
            <StepContent classes={{ root: classes.contentVertical }}>
              {content}
            </StepContent>
          )}
        </Step>
      ))}
    </Stepper>
  );
}

StepperComponent.defaultProps = {
  orientation: 'horizontal',
  className: '',
  activeStep: 0,
};

export default React.memo(StepperComponent);
