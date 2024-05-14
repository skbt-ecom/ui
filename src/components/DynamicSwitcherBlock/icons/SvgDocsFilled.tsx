import type { SVGProps } from "react";

export const SvgDocsFilled = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    {...props}
    width="20"
    height="26"
    viewBox="0 0 20 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.349976 2.59998C0.349976 1.34427 1.32537 0.349976 2.49998 0.349976H12.5C12.7341 0.349976 12.9616 0.446591 13.1316 0.623325L19.3816 7.12332C19.552 7.30053 19.65 7.54369 19.65 7.79998V23.4C19.65 24.6557 18.6746 25.65 17.5 25.65H2.49998C1.32538 25.65 0.349976 24.6557 0.349976 23.4V2.59998ZM2.49998 2.24998L9.99998 2.24998C10.0928 2.24998 10.1818 2.28685 10.2475 2.35249C10.3131 2.41813 10.35 2.50715 10.35 2.59998V9.09998C10.35 9.63771 10.7657 10.05 11.25 10.05C11.7342 10.05 17.5 10.05 17.5 10.05C17.6933 10.05 17.85 10.2067 17.85 10.4V23.4C17.85 23.5933 17.6933 23.75 17.5 23.75H2.49998C2.30668 23.75 2.14998 23.5933 2.14998 23.4V2.59998C2.14998 2.40668 2.30668 2.24998 2.49998 2.24998ZM12.3692 2.8138C12.5017 2.76044 12.6533 2.79292 12.7523 2.89586L17.2345 7.55739C17.3318 7.65853 17.3592 7.80798 17.3042 7.93708C17.2493 8.06618 17.1225 8.14998 16.9822 8.14998H12.5C12.3067 8.14998 12.15 7.99328 12.15 7.79998V3.13845C12.15 2.99564 12.2367 2.86715 12.3692 2.8138Z"
      fill="#E74031"
    />
    <path
      d="M9.09998 13.65C9.09998 13.1122 9.51573 12.7 9.99998 12.7C10.4842 12.7 10.9 13.1122 10.9 13.65V17.0115C10.9 17.1543 10.9867 17.2828 11.1192 17.3362C11.2517 17.3895 11.4033 17.357 11.5023 17.2541L11.8684 16.8733C12.2188 16.5089 12.7811 16.5089 13.1316 16.8733C13.4894 17.2455 13.4894 17.8544 13.1316 18.2266L10.6316 20.8266C10.2811 21.1911 9.71883 21.1911 9.36838 20.8266L6.86838 18.2266C6.51051 17.8544 6.51051 17.2455 6.86838 16.8733C7.21883 16.5089 7.78112 16.5089 8.13157 16.8733L8.49768 17.2541C8.59667 17.357 8.74827 17.3895 8.88074 17.3362C9.01321 17.2828 9.09998 17.1543 9.09998 17.0115L9.09998 13.65Z"
      fill="#E74031"
    />
  </svg>
);
