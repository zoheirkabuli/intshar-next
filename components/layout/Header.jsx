/** @jsxImportSource @emotion/react */

// * components
import Logo from './header/Logo';
import Menu from './header/Menu';

const Header = () => {
  return (
    <header
      css={{
        display: 'flex',
        justifyContent: 'center',
        paddingBlock: '1.5rem',
        position: 'sticky',
        top: '0',
        boxShadow: '0 5px 15px -5px #00000021',
        zIndex: '5',
        background: 'white',
      }}
    >
      <nav
        css={(theme) => ({
          width: theme.size.width,
          maxWidth: theme.size.maxWidth,
          display: 'flex',
          alignItems: 'center',
          gap: '3rem',
        })}
      >
        <Logo />
        <Menu />
      </nav>
    </header>
  );
};

export default Header;
