import React from 'react';
import useStyles from './styles';

const withSpaceForHelperTxt = (WrappedComponent, styles = {}) => {
  return props => {
    const classes = useStyles({ ...styles, ...props });
    return (
      <div className={classes.root}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withSpaceForHelperTxt;
