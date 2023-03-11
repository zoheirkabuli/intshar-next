/** @jsxImportSource @emotion/react */

// * icons
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

// * components
import Logo from '../header/Logo';
import FooterSocial from './FooterSocial';
import ContactBox from '@/components/boxes/ContactBox';

const FooterTop = () => {
  return (
    <div
      css={(theme) => ({
        width: theme.size.width,
        maxWidth: theme.size.maxWidth,
        display: 'flex',
        gap: '3rem',
        borderTop: `0.2rem solid ${theme.colors.darkerBg}`,
        paddingTop: '3rem',
        position: 'relative',
        marginTop: '2rem',
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
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '0.5rem',
          boxShadow: '0 5px 20px -5px #00000036',
          padding: '1rem 6rem 1rem 1rem',
          '@media screen and (max-width:768px)': {
            flex: 'none',
            width: '100%',
            padding: '1rem',
          },
        }}
      >
        <iframe
          css={{
            position: 'absolute',
            inset: '0',
            width: '100%',
            height: '100%',
            border: '0',
          }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7219.147341108038!2d44.44584998360167!3d33.319362702050235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1184d2284cc9e6d5!2zMzPCsDE5JzA4LjgiTiA0NMKwMjYnNDQuOCJF!5e0!3m2!1sen!2suk!4v1674902022469!5m2!1sen!2suk"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div
          css={(theme) => ({
            display: 'flex',
            position: 'relative',
            flexDirection: 'column',
            padding: '2.5rem',
            border: `0.1rem solid ${theme.colors.secondary}`,
            backgroundColor: '#F6F6F6',
            borderRadius: '0.5rem',
            gap: '1.5rem',
            '@media screen and (max-width:768px)': {
              width: '100%',
            },
          })}
        >
          <ContactBox
            icon={FaMapMarkerAlt}
            title={'العنوان'}
            content={
              <p>
                بغداد زيونه شارع الربيعي بناية
                <br />
                مجمع ركن الربيعي ط 3
              </p>
            }
          />
          <ContactBox
            icon={FaPhoneAlt}
            title={'التواصل والدعم الفني'}
            content={
              <>
                <a href="tel:07700004297">07700004297</a>
                <a href="tel:07730305550">07730305550</a>
              </>
            }
          />
          <ContactBox
            icon={FaEnvelope}
            title={'البريد الالكتروني'}
            content={<a href="mailto:info@inteshar.net">info@inteshar.net</a>}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
