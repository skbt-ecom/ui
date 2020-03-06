import React from 'react';
import useStyles from './styles';

const withSpaceForHelperTxt = (WrappedComponent, styles = {}) => {
  const WithSpace = props => {
    const classes = useStyles({ ...styles, ...props });
    return (
      <div className={classes.root}>
        <WrappedComponent {...props} />
      </div>
    );
  };

  WithSpace.dispalyName = 'WithSpaceForHelperTxt';

  return WithSpace;
};

export default withSpaceForHelperTxt;
