/** @jsxImportSource @emotion/react */

// * components
import Logo from '../header/Logo';
import FooterSocial from './FooterSocial';

const FooterTop = () => {
  return (
    <div
      css={(theme) => ({
        width: theme.size.width,
        maxWidth: theme.size.maxWidth,
        display: 'flex',
        gap: '3rem',
        borderTop: `0.2rem solid ${theme.colors.darkerBg}`,
        paddingTop: '2rem',
        position: 'relative',
        '@media screen and (max-width:768px)': {
          flexDirection: 'column',
        },
        '&::before': {
          content: '""',
          width: '2rem',
          height: '2rem',
          backgroundColor: theme.colors.secondary,
          rotate: '45deg',
          position: 'absolute',
          inset: '-1.1rem calc(50% - 1.1rem) auto',
        },
      })}
    >
      <div
        css={{
          backgroundColor: '#F6F6F6',
          padding: '2rem 2.5rem',
          flex: '1 0 0',
          borderRadius: '0.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
        }}
      >
        <Logo />
        <p css={{ textAlign: 'justify', color: '#0009' }}>
          شركة رائدة في مجال توزيع بطاقات الهدايا الرقمية والخدمات الالكترونية،
          تتميز بطاقم اداري ذو خبرة واسعة في هذا المجال لتصبح بذلك واحدة من أفضل
          الشركات في المنطقة.
        </p>
        <FooterSocial />
      </div>
      <div
        css={{
          flex: '2 0 0',
        }}
      ></div>
    </div>
  );
};

export default FooterTop;
