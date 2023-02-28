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
          gap: '1rem',
          flex: '1 0 0',
          minHeight: '200vh',
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
