import React from 'react';
import useStyles from './styles';

const Description = props => {
  const classes = useStyles(props);
  return (
    <div className={classes.descrBlock}>
      <span className={classes.secureIcon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="32"
          viewBox="0 0 24 32"
        >
          <g>
            <g>
              <g />
              <g>
                <path
                  fill="#049e23"
                  d="M11.997 1.533A19.95 19.95 0 0 0 22.83 5.849v9.042c0 9.55-9.4 14.883-10.833 15.641-1.434-.758-10.833-6.083-10.833-15.641V5.849a19.95 19.95 0 0 0 10.833-4.316zm.183 29.841c.117-.058 11.483-5.65 11.483-16.483V5.44a.417.417 0 0 0-.416-.417A19.092 19.092 0 0 1 12.263.674a.425.425 0 0 0-.533 0A19.092 19.092 0 0 1 .747 5.024a.417.417 0 0 0-.417.417v9.45c0 10.808 11.367 16.425 11.483 16.525.06.011.123.011.184 0a.492.492 0 0 0 .183-.042z"
                />
              </g>
              <g>
                <path
                  fill="#049e23"
                  d="M11.998 22.67a7.5 7.5 0 1 1 3.534-14.117.418.418 0 1 1-.4.734 6.667 6.667 0 1 0 3.533 5.883 7.008 7.008 0 0 0-.183-1.567 6.667 6.667 0 0 0-.834-2l-5.175 5.875a.442.442 0 0 1-.316.134.4.4 0 0 1-.309-.142l-2.65-3.042a.408.408 0 0 1 .042-.583.417.417 0 0 1 .592 0l2.333 2.692 5.15-5.834a.4.4 0 0 1 .308-.141h.117a.375.375 0 0 1 .342.175 7.442 7.442 0 0 1 1.416 4.433 7.5 7.5 0 0 1-7.5 7.5z"
                />
              </g>
            </g>
          </g>
        </svg>
      </span>
      <p className={classes.descrText}>
        Ваши данные будут загружены из&nbsp;Госуслуг. Это надёжно, быстро
        и&nbsp;безопасно.
        <br />
        Мы&nbsp;получим доступ только к&nbsp;ФИО, дате рождения и&nbsp;данным
        паспорта и&nbsp;сможем быстрее одобрить вашу заявку.
      </p>
    </div>
  );
};

export default React.memo(Description);