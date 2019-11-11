import React from 'react';
import Button from '@material-ui/core/Button';

import useStyles from './styles';

const ButtonESIA = props => {
  const classes = useStyles(props);

  return (
    <div className={classes.container}>
      <Button
        {...props}
        classes={{
          root: classes.root,
          label: classes.label,
          startIcon: classes.startIcon,
        }}
        startIcon={props.disabled ? props.iconDisabled : props.icon}
        color={'primary'}
      />
      {!props.withouthDescr && (
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
            Мы&nbsp;получим доступ только к&nbsp;ФИО, дате рождения
            и&nbsp;данным паспорта и&nbsp;сможем быстрее одобрить вашу заявку.
          </p>
        </div>
      )}
    </div>
  );
};

ButtonESIA.defaultProps = {
  variant: 'outlined',
  withouthDescr: false,
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="33"
      viewBox="0 0 30 33"
    >
      <defs>
        <linearGradient
          id="ho4wa"
          x1="15.52"
          x2="15.52"
          y1=".15"
          y2="33"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".4" stopColor="#1466ac" />
          <stop offset=".66" stopColor="#ef4058" />
        </linearGradient>
      </defs>
      <g>
        <g>
          <g>
            <path
              fill="#ef4058"
              d="M20.942 16.87c.016 0 .031 0 .062.046v.046c-.124.295-.233.59-.357.868 0 .015-.032.031-.047.031h-1.54v3.145a.067.067 0 0 1-.062.062h-.995a.067.067 0 0 1-.062-.062v-4.075a.067.067 0 0 1 .062-.062h2.939m-3.742 0c.016 0 .031 0 .062.047.012.012.018.03.016.046a42.842 42.842 0 0 1-1.552 4.245c-.217.512-.45 1.007-.636 1.364 0 .015-.03.03-.046.03h-1.102c-.015 0-.03-.015-.046-.03a.03.03 0 0 1 0-.047c.093-.201.186-.387.295-.573.14-.248.279-.511.434-.837l-1.52-4.152a.03.03 0 0 1 0-.046c.015-.016.03-.031.046-.031h1.024c.016 0 .031.015.047.03l1.008 2.774c.363-.904.668-1.83.915-2.773a.042.042 0 0 1 .047-.047H17.2m-9.46 3.207l.295.822a.057.057 0 0 1-.03.077c-.343.14-1.074.217-1.431.217-1.447 0-2.1-.713-2.1-2.247 0-1.533.653-2.215 2.1-2.215.448.004.893.072 1.321.201.017.002.03.015.031.031v.047c-.155.325-.295.589-.404.806-.015.03-.03.03-.062.03a2.639 2.639 0 0 0-.809-.123c-.917 0-1.026.387-1.026 1.239 0 1.054.327 1.24 1.026 1.24a3.456 3.456 0 0 0 1.011-.156h.047c.016.002.03.015.03.031M4.108 16.87c.015 0 .03 0 .062.031.012.013.017.03.015.047a39.242 39.242 0 0 1-1.55 4.245c-.218.511-.45 1.007-.637 1.363 0 .016-.031.031-.046.031H.849c-.015 0-.03-.015-.046-.03a.03.03 0 0 1 0-.047c.093-.186.186-.372.294-.558.14-.248.28-.511.435-.837l-1.52-4.152a.03.03 0 0 1 0-.046c.015-.016.03-.031.046-.031h1.024c.015 0 .03.015.046.03l1.009 2.774c.36-.905.666-1.831.915-2.773a.042.042 0 0 1 .046-.047h1.009m21.086 0c.03 0 .062.016.046.062v3.843c0 .015-.015.03-.03.046a6.284 6.284 0 0 1-1.955.356c-1.225 0-1.706-.542-1.706-1.967V16.93a.067.067 0 0 1 .062-.062h.977c.034.003.06.03.063.062v2.17c0 .867.155 1.068.806 1.068.23.002.46-.03.682-.093v-3.145a.067.067 0 0 1 .062-.062h.993m-12.891 0c.03 0 .062.016.062.047v4.075a.067.067 0 0 1-.062.062h-.993a.067.067 0 0 1-.062-.062v-3.146h-.993c-.1 1.072-.308 2.13-.62 3.161 0 .016-.016.031-.047.031H8.548a.054.054 0 0 1-.062-.062c.395-1.32.634-2.683.714-4.06.015-.03.03-.046.062-.046h3.04"
            />
          </g>
          <g>
            <path
              fill="#1466ac"
              d="M3 10.72H.062A.067.067 0 0 0 0 10.78v4.075c.002.033.029.06.062.062h.995a.067.067 0 0 0 .062-.062v-3.16h1.523c.016 0 .047-.016.047-.031.124-.28.233-.574.358-.868v-.047c-.016-.015-.031-.03-.047-.03m8.294 3.206a.034.034 0 0 0-.031-.03h-.047c-.328.101-.67.153-1.013.154-.701 0-1.029-.185-1.029-1.239 0-.852.11-1.24 1.029-1.24.275 0 .549.041.81.124.032 0 .047 0 .063-.03.109-.217.25-.48.405-.806v-.047a.034.034 0 0 0-.031-.03 4.73 4.73 0 0 0-1.325-.202c-1.45 0-2.104.682-2.104 2.215 0 1.534.654 2.247 2.104 2.247.359 0 1.091-.077 1.434-.217a.058.058 0 0 0 .031-.077l-.296-.822m-5.998.17c-.65 0-.85-.17-.85-1.285 0-1.177.216-1.286.85-1.286.633 0 .865.109.865 1.286 0 1.115-.2 1.286-.865 1.286m.01-3.486c-1.434 0-1.995.62-1.995 2.184 0 1.596.56 2.216 1.995 2.216 1.433 0 2.01-.62 2.01-2.215 0-1.596-.561-2.185-2.01-2.185"
            />
          </g>
          <g>
            <path
              fill="url(#ho4wa)"
              d="M29.934 19.227a50.322 50.322 0 0 0 .036-4.39v-.061a71.776 71.776 0 0 0-.115-2.113c-.067-.96-.155-1.946-.466-2.868a8.525 8.525 0 0 0-1.82-3.023c-.583-.62-1.281-1.098-1.976-1.586a49.519 49.519 0 0 0-3.218-2.045A53.595 53.595 0 0 0 19.12 1.39c-.561-.3-1.14-.567-1.733-.8a7.38 7.38 0 0 0-1.78-.393c-.155-.015-.31-.031-.466-.031a4.235 4.235 0 0 0-.435-.015h-.218c-1.057.03-2.036.216-2.813.573a52.62 52.62 0 0 0-4.523 2.37l-.094.047A50.893 50.893 0 0 0 2.69 6.007a6.783 6.783 0 0 0-1.6 1.704c-.11.155-.11.558.357.558h1.197c.513 0 .637-.31 1.212-.728a47.713 47.713 0 0 1 4.197-2.758 55.768 55.768 0 0 1 3.249-1.754 9.946 9.946 0 0 1 1.197-.57 5.63 5.63 0 0 1 2.067-.403h.31c.23 0 .458.015.685.047.437.044.866.148 1.274.31.032.015.078.03.11.046a.17.17 0 0 0 .061.031c.358.155 2.285 1.069 4.384 2.293a50.192 50.192 0 0 1 3.109 1.983c.52.333 1.014.707 1.475 1.119.942.906 1.722 2.277 1.851 3.59.132 1.34.225 2.68.253 4.03.009.342.012.684.011 1.026 0 1.404-.039 2.817-.175 4.214a8.54 8.54 0 0 1-.328 1.847 6.879 6.879 0 0 1-.891 1.728c-.076.111-.155.22-.238.325-.25.327-.542.618-.87.868-.016 0-.42.31-1.088.774a55.402 55.402 0 0 1-3.11 1.983 52.66 52.66 0 0 1-3.245 1.751 10.64 10.64 0 0 1-1.84.775 5.885 5.885 0 0 1-2.002.186 6.314 6.314 0 0 1-1.525-.289c-.933-.319-1.837-.79-2.716-1.24a39.74 39.74 0 0 1-2.008-1.105 42.136 42.136 0 0 1-4.197-2.758c-.575-.418-.7-.728-1.212-.728H1.447c-.466 0-.466.403-.358.558.431.656.973 1.232 1.601 1.704a53.995 53.995 0 0 0 4.368 2.866c.124.081.254.154.389.217a58.54 58.54 0 0 0 3.174 1.682c.89.439 1.79.845 2.784.995a8.142 8.142 0 0 0 3.937-.324c.463-.18.916-.388 1.356-.62a58.646 58.646 0 0 0 3.656-1.95 57.223 57.223 0 0 0 3.217-2.045c.684-.48 1.12-.79 1.15-.821a6.724 6.724 0 0 0 1.073-1.038 8.524 8.524 0 0 0 1.756-3.375c.262-1.035.296-2.108.366-3.168z"
            />
          </g>
        </g>
      </g>
    </svg>
  ),
  iconDisabled: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="33"
      viewBox="0 0 30 33"
    >
      <g>
        <g>
          <g>
            <path
              fill="#a1afbf"
              d="M20.942 16.87c.016 0 .031 0 .062.046v.046c-.124.295-.233.59-.357.868 0 .015-.032.031-.047.031h-1.54v3.145a.067.067 0 0 1-.062.062h-.995a.067.067 0 0 1-.062-.062v-4.075a.067.067 0 0 1 .062-.062h2.939m-3.742 0c.016 0 .031 0 .062.047.012.012.018.03.016.046a42.842 42.842 0 0 1-1.552 4.245c-.217.512-.45 1.007-.636 1.364 0 .015-.03.03-.046.03h-1.102c-.015 0-.03-.015-.046-.03a.03.03 0 0 1 0-.047c.093-.201.186-.387.295-.573.14-.248.279-.511.434-.837l-1.52-4.152a.03.03 0 0 1 0-.046c.015-.016.03-.031.046-.031h1.024c.016 0 .031.015.047.03l1.008 2.774c.363-.904.668-1.83.915-2.773a.042.042 0 0 1 .047-.047H17.2m-9.46 3.207l.295.822a.057.057 0 0 1-.03.077c-.343.14-1.074.217-1.431.217-1.447 0-2.1-.713-2.1-2.247 0-1.533.653-2.215 2.1-2.215.448.004.893.072 1.321.201.017.002.03.015.031.031v.047c-.155.325-.295.589-.404.806-.015.03-.03.03-.062.03a2.639 2.639 0 0 0-.809-.123c-.917 0-1.026.387-1.026 1.239 0 1.054.327 1.24 1.026 1.24a3.456 3.456 0 0 0 1.011-.156h.047c.016.002.03.015.03.031M4.108 16.87c.015 0 .03 0 .062.031.012.013.017.03.015.047a39.242 39.242 0 0 1-1.55 4.245c-.218.511-.45 1.007-.637 1.363 0 .016-.031.031-.046.031H.849c-.015 0-.03-.015-.046-.03a.03.03 0 0 1 0-.047c.093-.186.186-.372.294-.558.14-.248.28-.511.435-.837l-1.52-4.152a.03.03 0 0 1 0-.046c.015-.016.03-.031.046-.031h1.024c.015 0 .03.015.046.03l1.009 2.774c.36-.905.666-1.831.915-2.773a.042.042 0 0 1 .046-.047h1.009m21.086 0c.03 0 .062.016.046.062v3.843c0 .015-.015.03-.03.046a6.284 6.284 0 0 1-1.955.356c-1.225 0-1.706-.542-1.706-1.967V16.93a.067.067 0 0 1 .062-.062h.977c.034.003.06.03.063.062v2.17c0 .867.155 1.068.806 1.068.23.002.46-.03.682-.093v-3.145a.067.067 0 0 1 .062-.062h.993m-12.891 0c.03 0 .062.016.062.047v4.075a.067.067 0 0 1-.062.062h-.993a.067.067 0 0 1-.062-.062v-3.146h-.993c-.1 1.072-.308 2.13-.62 3.161 0 .016-.016.031-.047.031H8.548a.054.054 0 0 1-.062-.062c.395-1.32.634-2.683.714-4.06.015-.03.03-.046.062-.046h3.04"
            />
          </g>
          <g>
            <path
              fill="#a1afbf"
              d="M3 10.72H.062A.067.067 0 0 0 0 10.78v4.075c.002.033.029.06.062.062h.995a.067.067 0 0 0 .062-.062v-3.16h1.523c.016 0 .047-.016.047-.031.124-.28.233-.574.358-.868v-.047c-.016-.015-.031-.03-.047-.03m8.294 3.206a.034.034 0 0 0-.031-.03h-.047c-.328.101-.67.153-1.013.154-.701 0-1.029-.185-1.029-1.239 0-.852.11-1.24 1.029-1.24.275 0 .549.041.81.124.032 0 .047 0 .063-.03.109-.217.25-.48.405-.806v-.047a.034.034 0 0 0-.031-.03 4.73 4.73 0 0 0-1.325-.202c-1.45 0-2.104.682-2.104 2.215 0 1.534.654 2.247 2.104 2.247.359 0 1.091-.077 1.434-.217a.058.058 0 0 0 .031-.077l-.296-.822m-5.998.17c-.65 0-.85-.17-.85-1.285 0-1.177.216-1.286.85-1.286.633 0 .865.109.865 1.286 0 1.115-.2 1.286-.865 1.286m.01-3.486c-1.434 0-1.995.62-1.995 2.184 0 1.596.56 2.216 1.995 2.216 1.433 0 2.01-.62 2.01-2.215 0-1.596-.561-2.185-2.01-2.185"
            />
          </g>
          <g>
            <path
              fill="#a1afbf"
              d="M29.934 19.227a50.322 50.322 0 0 0 .036-4.39v-.061a71.776 71.776 0 0 0-.115-2.113c-.067-.96-.155-1.946-.466-2.868a8.525 8.525 0 0 0-1.82-3.023c-.583-.62-1.281-1.098-1.976-1.586a49.519 49.519 0 0 0-3.218-2.045A53.595 53.595 0 0 0 19.12 1.39c-.561-.3-1.14-.567-1.733-.8a7.38 7.38 0 0 0-1.78-.393c-.155-.015-.31-.031-.466-.031a4.235 4.235 0 0 0-.435-.015h-.218c-1.057.03-2.036.216-2.813.573a52.62 52.62 0 0 0-4.523 2.37l-.094.047A50.893 50.893 0 0 0 2.69 6.007a6.783 6.783 0 0 0-1.6 1.704c-.11.155-.11.558.357.558h1.197c.513 0 .637-.31 1.212-.728a47.713 47.713 0 0 1 4.197-2.758 55.768 55.768 0 0 1 3.249-1.754 9.946 9.946 0 0 1 1.197-.57 5.63 5.63 0 0 1 2.067-.403h.31c.23 0 .458.015.685.047.437.044.866.148 1.274.31.032.015.078.03.11.046a.17.17 0 0 0 .061.031c.358.155 2.285 1.069 4.384 2.293a50.192 50.192 0 0 1 3.109 1.983c.52.333 1.014.707 1.475 1.119.942.906 1.722 2.277 1.851 3.59.132 1.34.225 2.68.253 4.03.009.342.012.684.011 1.026 0 1.404-.039 2.817-.175 4.214a8.54 8.54 0 0 1-.328 1.847 6.879 6.879 0 0 1-.891 1.728c-.076.111-.155.22-.238.325-.25.327-.542.618-.87.868-.016 0-.42.31-1.088.774a55.402 55.402 0 0 1-3.11 1.983 52.66 52.66 0 0 1-3.245 1.751 10.64 10.64 0 0 1-1.84.775 5.885 5.885 0 0 1-2.002.186 6.314 6.314 0 0 1-1.525-.289c-.933-.319-1.837-.79-2.716-1.24a39.74 39.74 0 0 1-2.008-1.105 42.136 42.136 0 0 1-4.197-2.758c-.575-.418-.7-.728-1.212-.728H1.447c-.466 0-.466.403-.358.558.431.656.973 1.232 1.601 1.704a53.995 53.995 0 0 0 4.368 2.866c.124.081.254.154.389.217a58.54 58.54 0 0 0 3.174 1.682c.89.439 1.79.845 2.784.995a8.142 8.142 0 0 0 3.937-.324c.463-.18.916-.388 1.356-.62a58.646 58.646 0 0 0 3.656-1.95 57.223 57.223 0 0 0 3.217-2.045c.684-.48 1.12-.79 1.15-.821a6.724 6.724 0 0 0 1.073-1.038 8.524 8.524 0 0 0 1.756-3.375c.262-1.035.296-2.108.366-3.168z"
            />
          </g>
        </g>
      </g>
    </svg>
  ),
};

export default React.memo(ButtonESIA);
