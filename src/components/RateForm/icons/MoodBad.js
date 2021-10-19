import React from "react"

export default function MoodBad({ fill }) {
  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.986 2.667C8.627 2.667 2.666 8.64 2.666 16s5.96 13.333 13.32 13.333c7.374 0 13.347-5.973 13.347-13.333S23.36 2.667 15.987 2.667Zm.014 24c-5.893 0-10.667-4.774-10.667-10.667S10.107 5.333 16 5.333 26.666 10.107 26.666 16 21.893 26.667 16 26.667Zm4.666-12c1.107 0 2-.894 2-2 0-1.107-.893-2-2-2-1.106 0-2 .893-2 2 0 1.106.894 2 2 2Zm-9.333 0c1.107 0 2-.894 2-2 0-1.107-.893-2-2-2s-2 .893-2 2c0 1.106.893 2 2 2Zm4.667 4c-3.107 0-5.747 1.946-6.813 4.666h13.626c-1.066-2.72-3.706-4.666-6.813-4.666Z"
        fill={fill}
      />
    </svg>
  )
}
