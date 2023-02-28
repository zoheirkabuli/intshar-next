/** @jsxImportSource @emotion/react */
import { FaChevronUp } from 'react-icons/fa';

const CopyRight = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div
      css={(theme) => ({
        width: '100%',
        backgroundColor: theme.colors.darkerBg,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '1rem 1rem 0 0',
        paddingBottom: '2rem',
        gap: '2rem',
      })}
    >
      <button
        onClick={scrollToTop}
        css={(theme) => ({
          width: '5rem',
          height: '5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: `0.1rem solid ${theme.colors.secondary}`,
          backgroundColor: 'black',
          borderRadius: '1rem',
          marginTop: '-2.5rem',
          cursor: 'pointer',
        })}
      >
        <FaChevronUp
          css={(theme) => ({
            fill: theme.colors.secondary,
          })}
        />
      </button>
      <p css={{ color: '#00000080', textAlign: 'center', fontWeight: 300 }}>
        جميع الحقوق محفوظة
      </p>
    </div>
  );
};

export default CopyRight;
