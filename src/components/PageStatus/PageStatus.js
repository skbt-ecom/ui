import React from 'react';
import Typography from '@material-ui/core/Typography';
import cn from 'classnames';

import Box from '../Box';
import icon_done from './icon_done.svg';
import icon_error from './icon_error.svg';

import useStyles from './styles';

const successMsg = {
  head1: 'Спасибо!',
  head2: 'Ваша заявка отправлена',
  desc: 'В ближайшее время с Вами свяжутся специалисты нашего Банка.',
};

const errorMsg = {
  head1: 'Произошла ошибка',
  head2: 'Возможно:',
};

function PageStatus(props) {
  const classes = useStyles();
  const { success } = props;

  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h1" className={classes.head1}>
          {success ? successMsg.head1 : errorMsg.head1}
        </Typography>
        <div>
          <img
            alt="icon"
            src={success ? icon_done : icon_error}
            className={classes.icon}
          />
        </div>
      </Box>
      <Typography variant="h3" className={classes.head2}>
        {success ? successMsg.head2 : errorMsg.head2}
      </Typography>
      <Typography variant="h4" className={classes.desk}>
        {success ? (
          successMsg.desc
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
  success: false,
};

export default React.memo(PageStatus);
