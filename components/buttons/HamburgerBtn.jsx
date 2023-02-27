/** @jsxImportSource @emotion/react */

const HamburgerSvg = ({ isOpen }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      css={(theme) => ({
        '& > .line': {
          fill: 'none',
          stroke: theme.colors.secondary,
          strokeWidth: '10',
          transition:
            'stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
      })}
    >
      <path
        css={{
          strokeDasharray: isOpen ? '90 207' : '60 207',
          ...(isOpen && { strokeDashoffset: '-134' }),
          strokeWidth: '6',
        }}
        className="line"
        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
      />
      <path
        css={{
          strokeDasharray: isOpen ? '1 60' : '60 60',
          ...(isOpen && { strokeDashoffset: '-30' }),
          strokeWidth: '6',
        }}
        className="line"
        d="M 20,50 H 80"
      />
      <path
        css={{
          strokeDasharray: isOpen ? '90 207' : '60 207',
          ...(isOpen && { strokeDashoffset: '-134' }),
          strokeWidth: '6',
        }}
        className="line"
        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
      />
    </svg>
  );
};

const HamburgerBtn = ({ cssStyle, isOpen, openHandler }) => {
  return (
    <button
      css={{
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        display: 'flex',
        aspectRatio: '1',
        ...cssStyle,
      }}
      onClick={openHandler}
      aria-label="Toggle Menu"
    >
      <HamburgerSvg isOpen={isOpen} />
    </button>
  );
};

export default HamburgerBtn;
