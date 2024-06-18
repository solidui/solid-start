export function AzureLogo(props: { class: string }) {
  return (
    <svg
      role="presentation"
      viewBox="0 -50 256 286"
      xmlns="http://www.w3.org/2000/svg"
      class={props.class}
    >
      <defs>
        <linearGradient
          id="azure_ab40b385-f958-420f-bfab-714be1677426-6db27bcc"
          x1="-960.606"
          y1="283.397"
          x2="-1032.511"
          y2="70.972"
          gradientTransform="matrix(1 0 0 -1 1075 318)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#114a8b"></stop>
          <stop offset="1" stop-color="#0669bc"></stop>
        </linearGradient>
        <linearGradient
          id="azure_f40af90d-72eb-49b3-94b2-2510f1071722-c3af2f4d"
          x1="-938.144"
          y1="184.402"
          x2="-954.778"
          y2="178.778"
          gradientTransform="matrix(1 0 0 -1 1075 318)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-opacity=".3"></stop>
          <stop offset=".071" stop-opacity=".2"></stop>
          <stop offset=".321" stop-opacity=".1"></stop>
          <stop offset=".623" stop-opacity=".05"></stop>
          <stop offset="1" stop-opacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="azure_e382d742-7d51-4974-a256-24e182eef053-47244f39"
          x1="-947.292"
          y1="289.594"
          x2="-868.363"
          y2="79.308"
          gradientTransform="matrix(1 0 0 -1 1075 318)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#3ccbf4"></stop>
          <stop offset="1" stop-color="#2892df"></stop>
        </linearGradient>
      </defs>
      <path
        d="M89.158 18.266h69.238L86.523 231.224a11.041 11.041 0 01-10.461 7.51H22.179a11.023 11.023 0 01-10.445-14.548l66.963-198.41a11.04 11.04 0 0110.461-7.51z"
        fill="url(#azure_ab40b385-f958-420f-bfab-714be1677426-6db27bcc)"
      ></path>
      <path
        d="M189.77 161.104H79.976a5.083 5.083 0 00-3.468 8.8l70.552 65.847a11.091 11.091 0 007.567 2.983h62.167z"
        fill="#0078d4"
      ></path>
      <path
        d="M89.158 18.266a10.95 10.95 0 00-10.483 7.654L11.817 224.006a11.01 11.01 0 0010.393 14.728h55.274a11.814 11.814 0 009.069-7.714l13.33-39.29 47.625 44.418a11.267 11.267 0 007.089 2.586h61.937l-27.166-77.63-79.19.018 48.47-142.856z"
        fill="url(#azure_f40af90d-72eb-49b3-94b2-2510f1071722-c3af2f4d)"
      ></path>
      <path
        d="M177.592 25.764a11.023 11.023 0 00-10.444-7.498H89.984a11.024 11.024 0 0110.445 7.498l66.967 198.421a11.024 11.024 0 01-10.445 14.549h77.164a11.024 11.024 0 0010.444-14.549z"
        fill="url(#azure_e382d742-7d51-4974-a256-24e182eef053-47244f39)"
      ></path>
    </svg>
  );
}
