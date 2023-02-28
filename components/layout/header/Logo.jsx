/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import Image from 'next/image';

// * assets

import logo from '@/assets/img/logo.webp';

const Logo = () => {
  return (
    <Link
      href="/"
      css={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        '@media screen and (max-width:768px)': {
          'header &': {
            order: '2',
          },
        },
      }}
    >
      <Image
        src={logo}
        width={70}
        height={70}
        alt="الانتشار"
        css={{
          width: '6rem',
          height: 'auto',
          aspectRatio: '1',
          '@media screen and (max-width:768px)': {
            width: '4.2rem',
          },
        }}
        priority
      />
      <span
        css={{
          fontSize: '3rem',
          fontWeight: 900,
          '@media screen and (max-width:768px)': {
            fontSize: '2rem',
            'header &': {
              display: 'none',
            },
          },
        }}
      >
        الانتشار
      </span>
    </Link>
  );
};

export default Logo;
