type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  menu: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M80 160h352M80 256h352M80 352h352"
      />
    </svg>
  ),
  user: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path
        fill="currentColor"
        d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"
      />
      <path
        fill="currentColor"
        d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"
      />
    </svg>
  ),
  search: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="2.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      {...props}
    >
      <path
        d="M17 17l4 4M3 11a8 8 0 1016 0 8 8 0 00-16 0z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
  check: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M416 128L192 384l-96-96"
      />
    </svg>
  ),
  checkCircle: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path
        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M352 176L217.6 336 160 272"
      />
    </svg>
  ),
  earth: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path
        d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208z"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <path
        fill="currentColor"
        d="M445.57 172.14c-16.06.1-14.48 29.73-34.49 15.75-7.43-5.18-12-12.71-21.33-15-8.15-2-16.5.08-24.55 1.47-9.15 1.58-20 2.29-26.94 9.22-6.71 6.67-10.26 15.62-17.4 22.33-13.81 13-19.64 27.19-10.7 45.57 8.6 17.67 26.59 27.26 46 26 19.07-1.27 38.88-12.33 38.33 15.38-.2 9.8 1.85 16.6 4.86 25.71 2.79 8.4 2.6 16.54 3.24 25.21 1.18 16.2 4.16 34.36 12.2 48.67l15-21.16c1.85-2.62 5.72-6.29 6.64-9.38 1.63-5.47-1.58-14.87-1.95-21s-.19-12.34-1.13-18.47c-1.32-8.59-6.4-16.64-7.1-25.13-1.29-15.81 1.6-28.43-10.58-41.65-11.76-12.75-29-15.81-45.47-13.22-8.3 1.3-41.71 6.64-28.3-12.33 2.65-3.73 7.28-6.79 10.26-10.34 2.59-3.09 4.84-8.77 7.88-11.18s17-5.18 21-3.95 8.17 7 11.64 9.56a49.89 49.89 0 0021.81 9.36c13.66 2 42.22-5.94 42-23.46-.04-8.4-7.84-20.1-10.92-27.96zM287.45 316.3c-5.33-22.44-35.82-29.94-52.26-42.11-9.45-7-17.86-17.81-30.27-18.69-5.72-.41-10.51.83-16.18-.64-5.2-1.34-9.28-4.14-14.82-3.41-10.35 1.36-16.88 12.42-28 10.92-10.55-1.42-21.42-13.76-23.82-23.81-3.08-12.92 7.14-17.11 18.09-18.26 4.57-.48 9.7-1 14.09.67 5.78 2.15 8.51 7.81 13.7 10.67 9.73 5.33 11.7-3.19 10.21-11.83-2.23-12.94-4.83-18.22 6.71-27.12 8-6.14 14.84-10.58 13.56-21.61-.76-6.48-4.31-9.41-1-15.86 2.51-4.91 9.4-9.34 13.89-12.27 11.59-7.56 49.65-7 34.1-28.16-4.57-6.21-13-17.31-21-18.83-10-1.89-14.44 9.27-21.41 14.19-7.2 5.09-21.22 10.87-28.43 3-9.7-10.59 6.43-14.07 10-21.46s-8.27-21.36-14.61-24.9l-29.81 33.43a41.52 41.52 0 008.34 31.86c5.93 7.63 15.37 10.08 15.8 20.5.42 10-1.14 15.12-7.68 22.15-2.83 3-4.83 7.26-7.71 10.07-3.53 3.43-2.22 2.38-7.73 3.32-10.36 1.75-19.18 4.45-29.19 7.21C95.34 199.94 93.8 172.69 86.2 162l-25 20.19c-.27 3.31 4.1 9.4 5.29 13 6.83 20.57 20.61 36.48 29.51 56.16 9.37 20.84 34.53 15.06 45.64 33.32 9.86 16.2-.67 36.71 6.71 53.67 5.36 12.31 18 15 26.72 24 8.91 9.09 8.72 21.53 10.08 33.36a305.22 305.22 0 007.45 41.28c1.21 4.69 2.32 10.89 5.53 14.76 2.2 2.66 9.75 4.95 6.7 5.83 4.26.7 11.85 4.68 15.4 1.76 4.68-3.84 3.43-15.66 4.24-21 2.43-15.9 10.39-31.45 21.13-43.35 10.61-11.74 25.15-19.69 34.11-33 8.73-12.98 11.36-30.49 7.74-45.68zm-33.39 26.32c-6 10.71-19.36 17.88-27.95 26.39-2.33 2.31-7.29 10.31-10.21 8.58-2.09-1.24-2.8-11.62-3.57-14a61.17 61.17 0 00-21.71-29.95c-3.13-2.37-10.89-5.45-12.68-8.7-2-3.53-.2-11.86-.13-15.7.11-5.6-2.44-14.91-1.06-20 1.6-5.87-1.48-2.33 3.77-3.49 2.77-.62 14.21 1.39 17.66 2.11 5.48 1.14 8.5 4.55 12.82 8 11.36 9.11 23.87 16.16 36.6 23.14 9.86 5.46 12.76 12.37 6.46 23.62zM184.46 67.09c4.74 4.63 9.2 10.11 16.27 10.57 6.69.45 13-3.17 18.84 1.38 6.48 5 11.15 11.33 19.75 12.89 8.32 1.51 17.13-3.35 19.19-11.86 2-8.11-2.31-16.93-2.57-25.07 0-1.13.61-6.15-.17-7-.58-.64-5.42.08-6.16.1q-8.13.24-16.22 1.12a207.1 207.1 0 00-57.18 14.65c2.43 1.68 5.48 2.35 8.25 3.22zM356.4 123.27c8.49 0 17.11-3.8 14.37-13.62-2.3-8.23-6.22-17.16-15.76-12.72-6.07 2.82-14.67 10-15.38 17.12-.81 8.08 11.11 9.22 16.77 9.22zM349.62 166.24c8.67 5.19 21.53 2.75 28.07-4.66 5.11-5.8 8.12-15.87 17.31-15.86a15.4 15.4 0 0110.82 4.41c3.8 3.93 3.05 7.62 3.86 12.54 1.81 11.05 13.66.63 16.75-3.65 2-2.79 4.71-6.93 3.8-10.56-.84-3.39-4.8-7-6.56-10.11-5.14-9-9.37-19.47-17.07-26.74-7.41-7-16.52-6.19-23.55 1.08-5.76 6-12.45 10.75-16.39 18.05-2.78 5.13-5.91 7.58-11.54 8.91-3.1.73-6.64 1-9.24 3.08-7.24 5.7-3.12 19.39 3.74 23.51z"
      />
    </svg>
  ),
  door: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <path d="M24.33 1.67a2 2 0 0 1 2 1.85v24.81h3v2H2.67v-2h3V3.67a2 2 0 0 1 1.85-2h.15zm-4 2H7.67v24.66h12.66zm4 0h-2v24.66h2zm-7 11a1.33 1.33 0 1 1 0 2.66 1.33 1.33 0 0 1 0-2.66z"></path>
    </svg>
  ),
  calendar: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <path d="M11.67 0v1.67h8.66V0h2v1.67h6a2 2 0 0 1 2 1.85v16.07a2 2 0 0 1-.46 1.28l-.12.13L21 29.75a2 2 0 0 1-1.24.58H6.67a5 5 0 0 1-5-4.78V3.67a2 2 0 0 1 1.85-2h6.15V0zm16.66 11.67H3.67v13.66a3 3 0 0 0 2.82 3h11.18v-5.66a5 5 0 0 1 4.78-5h5.88zm-.08 8h-5.58a3 3 0 0 0-3 2.82v5.76zm-18.58-16h-6v6h24.66v-6h-6v1.66h-2V3.67h-8.66v1.66h-2z"></path>
    </svg>
  ),
  navigate: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path
        d="M448 64L64 240.14h200a8 8 0 018 8V448z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  ),
  shield: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M336 176L225.2 304 176 255.8"
      />
      <path
        d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  ),
  gift: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path
        d="M256 104v56h56a56 56 0 10-56-56zM256 104v56h-56a56 56 0 1156-56z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <rect
        x="64"
        y="160"
        width="384"
        height="112"
        rx="32"
        ry="32"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        d="M416 272v144a48 48 0 01-48 48H144a48 48 0 01-48-48V272M256 160v304"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  ),
  people: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
    </svg>
  ),
  star: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
      ></path>
    </svg>
  ),
  speedometer: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M326.1 231.9l-47.5 75.5a31 31 0 01-7 7 30.11 30.11 0 01-35-49l75.5-47.5a10.23 10.23 0 0111.7 0 10.06 10.06 0 012.3 14z" />
      <path
        d="M256 64C132.3 64 32 164.2 32 287.9a223.18 223.18 0 0056.3 148.5c1.1 1.2 2.1 2.4 3.2 3.5a25.19 25.19 0 0037.1-.1 173.13 173.13 0 01254.8 0 25.19 25.19 0 0037.1.1l3.2-3.5A223.18 223.18 0 00480 287.9C480 164.2 379.7 64 256 64z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M256 128v32M416 288h-32M128 288H96M165.49 197.49l-22.63-22.63M346.51 197.49l22.63-22.63"
      />
    </svg>
  ),
  bag: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
      />
    </svg>
  ),
  suitcase: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm64,24V200H96V72ZM40,72H80V200H40ZM216,200H176V72h40V200Z"></path>
    </svg>
  ),
  chevronUp: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48"
        d="M112 328l144-144 144 144"
      />
    </svg>
  ),
  chevronDown: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48"
        d="M112 184l144 144 144-144"
      />
    </svg>
  ),
  mapTrifold: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M228.92,49.69a8,8,0,0,0-6.86-1.45L160.93,63.52,99.58,32.84a8,8,0,0,0-5.52-.6l-64,16A8,8,0,0,0,24,56V200a8,8,0,0,0,9.94,7.76l61.13-15.28,61.35,30.68A8.15,8.15,0,0,0,160,224a8,8,0,0,0,1.94-.24l64-16A8,8,0,0,0,232,200V56A8,8,0,0,0,228.92,49.69ZM104,52.94l48,24V203.06l-48-24ZM40,62.25l48-12v127.5l-48,12Zm176,131.5-48,12V78.25l48-12Z"></path>
    </svg>
  ),
  heart: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path>
    </svg>
  ),
  manualTransmission: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M1.5 6.75v-3a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zm2.85-.45l-2.25-3a.75.75 0 1 0-1.2.9l2.25 3a.75.75 0 1 0 1.2-.9zm18.9 13.95h-3L21 21v-.75A2.25 2.25 0 0 1 23.25 18l-.75-.75v6a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-.75-.75 3.75 3.75 0 0 0-3.75 3.75V21c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5zM18.024 2.056A.75.75 0 1 1 18.75 3v1.5a.75.75 0 1 1-.722.95.75.75 0 1 0-1.446.4A2.25 2.25 0 1 0 18.75 3c-1 0-1 1.5 0 1.5a2.25 2.25 0 1 0-2.174-2.832.75.75 0 0 0 1.448.388zM12 18.75a.75.75 0 0 1 1.5 0c0 .315-.107.622-.304.868l-2.532 3.163A.75.75 0 0 0 11.25 24h3a.75.75 0 0 0 0-1.5h-3l.586 1.219 2.532-3.164c.41-.513.632-1.15.632-1.805a2.25 2.25 0 0 0-4.5 0 .75.75 0 0 0 1.5 0zM8.25 1.5H9v5.25a.75.75 0 0 0 1.5 0V1.5A1.5 1.5 0 0 0 9 0h-.75a.75.75 0 0 0 0 1.5zm0 6h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0 0 1.5zm-6-7.5H.75A.75.75 0 0 0 0 .75v3c0 .414.336.75.75.75h1.5a2.25 2.25 0 0 0 0-4.5zm0 1.5a.75.75 0 0 1 0 1.5H.75l.75.75v-3l-.75.75h1.5zm8.25 11.25v-3a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zm1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zm7.5 0v-3a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zm3 1.5A2.25 2.25 0 0 0 20.25 12h-15A2.25 2.25 0 0 1 3 9.75a.75.75 0 0 0-1.5 0 3.75 3.75 0 0 0 3.75 3.75h15a.75.75 0 0 1 .75.75.75.75 0 0 0 1.5 0z"
      ></path>
    </svg>
  ),
  automaticTransmission: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M19.25 14.25v-4.5l-1.374.416 3 4.5c.412.617 1.374.326 1.374-.416v-4.5a.75.75 0 0 0-1.5 0v4.5l1.374-.416-3-4.5c-.412-.617-1.374-.326-1.374.416v4.5a.75.75 0 0 0 1.5 0zm3 6a3.75 3.75 0 0 0-3.75-3.75.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75a3.75 3.75 0 0 0 3.75-3.75zm-1.5 0a2.25 2.25 0 0 1-2.25 2.25l.75.75v-6l-.75.75a2.25 2.25 0 0 1 2.25 2.25zM18.5 4.5H20A2.25 2.25 0 0 0 20 0h-1.5a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 1.5 0v-6l-.75.75H20A.75.75 0 0 1 20 3h-1.5a.75.75 0 0 0 0 1.5zM4.25 6.75v4.5A2.25 2.25 0 0 0 6.5 13.5H8a.75.75 0 0 1 .75.75v4.5A2.25 2.25 0 0 0 11 21h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 1-.75-.75v-4.5A2.25 2.25 0 0 0 8 12H6.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-1.5 0zm3-3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0z"
      ></path>
    </svg>
  ),
};
