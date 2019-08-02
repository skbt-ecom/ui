import React from 'react';
import Typography from '@material-ui/core/Typography';
import cn from 'classnames';

import Box from '../Box';
import icon_done from './icon_done.svg';
import icon_error from './icon_error.svg';

import useStyles from './styles';

const success = {
  head1: 'Спасибо!',
  head2: 'Ваша заявка отправлена',
  desc: 'В ближайшее время с Вами свяжутся специалисты нашего Банка.',
};

const error = {
  head1: 'Произошла ошибка',
  head2: 'Возможно:',
};

function PageStatus(props) {
  const classes = useStyles();
  const { isSuccess } = props;

  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h1" className={classes.head1}>
          {isSuccess ? success.head1 : error.head1}
        </Typography>
        <div>
          <img
            alt="icon"
            src={isSuccess ? icon_done : icon_error}
            className={classes.icon}
          />
        </div>
      </Box>
      <Typography variant="h3" className={classes.head2}>
        {isSuccess ? success.head2 : error.head2}
      </Typography>
      <Typography variant="h4" className={classes.desk}>
        {isSuccess ? (
          success.desc
        ) : (
          <>
            <ul className={classes.errorDesc1}>
              <li>Вы уже оставили заявку*</li>
              <li>Сервер занят</li>
              <li>Ведутся технические работы</li>
            </ul>
            <div className={classes.errorDesc2}>
              * в сутки можно оставлять одну заявку
            </div>
          </>
        )}
      </Typography>
    </div>
  );
}

PageStatus.defaultProps = {
  isSuccess: false,
};

export default React.memo(PageStatus);
