const Template = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 107 147"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_32_13043)">
        <path
          d="M8 142H99C101.761 142 104 139.761 104 137V71.5V36.25V24L79 1H53.5H8C5.23858 1 3 3.23858 3 6V137C3 139.761 5.23857 142 8 142Z"
          fill="#5A58F2"
        />
      </g>
      <path
        d="M65.1428 57H40.8572C39.2815 57 38 58.2815 38 59.8572V84.1428C38 85.7185 39.2815 87 40.8572 87H65.1428C66.7177 87 68 85.7185 68 84.1428V59.8572C67.9998 58.2815 66.7178 57 65.1428 57ZM65.1428 68.4285H52.2857V59.8571H65.1428V68.4285ZM40.8572 59.8571H49.4286V84.1427H40.8572V59.8571ZM52.2857 84.1427V71.2857H65.1434L65.1442 84.1427H52.2857Z"
        fill="white"
      />
      <path d="M79 1L104 24H81C79.8954 24 79 23.1046 79 22V1Z" fill="#E8E7FD" />
      <defs>
        <filter
          id="filter0_dd_32_13043"
          x="0"
          y="0"
          width="107"
          height="147"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_32_13043"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_32_13043"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_32_13043"
            result="effect2_dropShadow_32_13043"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_32_13043"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Template;
