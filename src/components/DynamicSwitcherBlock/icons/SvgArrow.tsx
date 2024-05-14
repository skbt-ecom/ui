import type { SVGProps } from "react";

export const SvgArrow = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    {...props}
    width="16"
    height="10"
    viewBox="0 0 16 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L8 6.58579L13.2929 1.29289C13.6834 0.902368 14.3166 0.902368 14.7071 1.29289C15.0976 1.68342 15.0976 2.31658 14.7071 2.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z"
      fill="#607286"
      stroke="white"
      strokeWidth="0.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
