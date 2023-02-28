/** @jsxImportSource @emotion/react */

// * components
import FooterTop from './footer/FooterTop';
import CopyRight from './footer/CopyRight';

const Footer = () => {
  return (
    <footer
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        width: '100%',
        alignItems: 'center',
      }}
    >
      <FooterTop />
      <CopyRight />
    </footer>
  );
};

export default Footer;
