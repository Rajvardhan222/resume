import React from 'react';

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
    <title>Logo</title>
    <g transform="translate(-8.000000, -2.000000)">
      <g transform="translate(11.000000, 5.000000)">
        {/* <!-- Hexagon --> */}
        <polygon
          stroke="currentColor"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
          fill="none"
        />
        {/* <!-- Centered Letter R --> */}
        <g id="R" transform="translate(0.000000, 3.000000)">
          <path
            d="M28.5 30.3 L39.5 30.3 C45.5 30.3 49 33.5 49 38 C49 41.5 46.5 44 43.5 44 L28.5 44 Z M28.5 47 L39 47 C43 47 45 49.5 45 52 C45 55 43 57 39 57 L28.5 57 Z M43.5 44 L49.5 61 L44 61 L38.5 47 Z"
            fill="currentColor"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default IconLogo;
