/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import { useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_ALL_PAGES } from '@/lib/queries';

// * components
import HamburgerBtn from '@/components/buttons/HamburgerBtn';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, loading, error } = useQuery(GET_ALL_PAGES);

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  if (error) {
    return <p>Error!</p>;
  }

  return (
    <>
      <HamburgerBtn
        cssStyle={{
          width: '4rem',
          display: 'none',
          '@media screen and (max-width:768px)': {
            display: 'flex',
            order: '1',
            marginInlineEnd: 'auto',
            zIndex: '15',
          },
        }}
        isOpen={isOpen}
        openHandler={openHandler}
      />
      <ul
        css={(theme) => ({
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          '& a': {
            position: 'relative',
          },
          '& a::after': {
            content: '""',
            position: 'absolute',
            width: '0',
            height: '0.2rem',
            backgroundColor: theme.colors.secondary,
            top: 'calc(100% + 5px)',
            left: 'calc(50% - 6px)',
            transition: 'width 0.3s',
          },
          '& a:hover::after': {
            width: '1.2rem',
          },
          '@media screen and (max-width:768px)': {
            position: 'fixed',
            top: '0',
            left: '100%',
            height: '100%',
            width: '75%',
            transition: 'transform 0.4s,box-shadow 0.4s',
            transform: isOpen ? 'translateX(-100%)' : 'translateX(0)',
            zIndex: '10',
            flexDirection: 'column',
            backgroundColor: 'white',
            justifyContent: 'center',
            boxShadow: isOpen ? '-5px 0 10px -5px #0003' : 'none',
          },
        })}
      >
        {loading ? (
          <p>تحميل...</p>
        ) : (
          <>
            <li>
              <Link href="/">الرئيسية</Link>
            </li>
            {data.pages.map((page) => (
              <li key={page.id}>
                <Link
                  href={{
                    pathname: '/[pagePath]',
                    query: { pagePath: page.path },
                  }}
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </>
        )}
      </ul>
    </>
  );
};

export default Menu;
