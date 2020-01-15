import React from 'react';
import useStyles from './styles';

const Phone = props => {
  const classes = useStyles();
  const { number, classes: propsClasses = {} } = props;

  return (
    <a
      rel="nofollow"
      href={`tel:${number}`}
      className={`${classes.phoneNum} ${propsClasses.phoneNum}`}
    >
      {number}
    </a>
  );
};

export default Phone;
