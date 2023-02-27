/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import Image from 'next/image';
import useMediaQuery from '@/lib/useMediaQuery';

// * assets

import logo from '@/assets/img/logo.webp';

const Logo = () => {
  const isMobile = useMediaQuery(768);

  return (
    <Link
      href="/"
      css={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        '@media screen and (max-width:768px)': {
          order: '2',
        },
      }}
    >
      <Image
        src={logo}
        width={isMobile ? 50 : 100}
        height={isMobile ? 50 : 100}
        alt="الانتشار"
        css={{
          width: '6rem',
          height: 'auto',
          aspectRatio: '1',
          '@media screen and (max-width:768px)': {
            width: '4.2rem',
          },
        }}
      />
      <p
        css={{
          fontSize: '3rem',
          fontWeight: 900,
          '@media screen and (max-width:768px)': {
            display: 'none',
          },
        }}
      >
        الانتشار
      </p>
    </Link>
  );
};

export default Logo;
