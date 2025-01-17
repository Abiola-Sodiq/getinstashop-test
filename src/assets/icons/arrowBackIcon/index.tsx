const ArrowBack = ({
  onClick,
  className,
}: {
  onClick: () => void;
  className: string;
}) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <mask
        id="mask0_1705_1119"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="21"
        height="20"
        type="alpha"
      >
        <rect x="0.333252" width="20" height="20" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1705_1119)">
        <path
          d="M16.1653 10H4.49862M4.49862 10L10.332 4.16667M4.49862 10L10.332 15.8333"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.1653 10H4.49862M4.49862 10L10.332 4.16667M4.49862 10L10.332 15.8333"
          stroke="black"
          strokeOpacity="0.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default ArrowBack;
