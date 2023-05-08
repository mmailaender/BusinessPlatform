const Template = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 126 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_328_8893)">
        <path
          d="M9 176H121C123.761 176 126 173.761 126 171V88V44V28.7092L95.802 0H65H9C6.23858 0 4 2.23857 4 5V171C4 173.761 6.23858 176 9 176Z"
          fill="#5A58F2"
        />
      </g>
      <path
        d="M76.1428 73H51.8572C50.2815 73 49 74.2815 49 75.8572V100.143C49 101.719 50.2815 103 51.8572 103H76.1428C77.7177 103 79 101.719 79 100.143V75.8572C78.9998 74.2815 77.7178 73 76.1428 73ZM76.1428 84.4285H63.2857V75.8571H76.1428V84.4285ZM51.8572 75.8571H60.4286V100.143H51.8572V75.8571ZM63.2857 100.143V87.2857H76.1434L76.1442 100.143H63.2857Z"
        fill="white"
      />
      <path
        d="M95.802 0L126 28.7092H97.802C96.6974 28.7092 95.802 27.8138 95.802 26.7092V0Z"
        fill="#E8E7FD"
      />
      <defs>
        <filter
          id="filter0_dd_328_8893"
          x="0"
          y="0"
          width="126"
          height="180"
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
          <feOffset dx="-2" dy="2" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.9625 0 0 0 0 0.973214 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="multiply"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_328_8893"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-1" dy="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.92625 0 0 0 0 0.933036 0 0 0 0 0.95 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_328_8893"
            result="effect2_dropShadow_328_8893"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_328_8893"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Template;
