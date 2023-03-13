/** @jsxImportSource @emotion/react */
import Image from 'next/image';

// * assets
import logo from '../../assets/img/about-logo.webp';

const HomeAbout = () => {
  return (
    <div
      css={(theme) => ({
        width: '100%',
        backgroundColor: theme.colors.bg,
        paddingBlock: '3rem',
        display: 'flex',
        justifyContent: 'center',
      })}
    >
      <div
        css={(theme) => ({
          width: theme.size.width,
          maxWidth: theme.size.maxWidth,
          display: 'flex',
          gap: '5rem',
          alignItems: 'center',
          '@media screen and (max-width:768px)': {
            flexDirection: 'column',
          },
        })}
      >
        <Image
          src={logo}
          alt="logo"
          css={{ width: '40rem', aspectRatio: '1' }}
        />
      </div>
    </div>
  );
};

export default HomeAbout;
