import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import cn from 'classnames';

import useStyles from './styles';

function StepConnector(props) {
  return <div className={props.className} />;
}

function StepperComponent(props) {
  const classes = useStyles();
  const { orientation, steps, className } = props;
  const isVertical = orientation === 'vertical';

  return (
    <Stepper
      activeStep={1}
      connector={
        <StepConnector
          className={
            isVertical ? classes.connectorVertical : classes.connectorHorizontal
          }
        />
      }
      classes={{ root: cn(classes.stepper, className) }}
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
};

export default React.memo(StepperComponent);
