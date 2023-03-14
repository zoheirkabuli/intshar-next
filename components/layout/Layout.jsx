/** @jsxImportSource @emotion/react */

// * components
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
