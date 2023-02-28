/** @jsxImportSource @emotion/react */
import {
  RiWhatsappFill,
  RiTwitterFill,
  RiInstagramFill,
  RiFacebookBoxFill,
} from 'react-icons/ri';

const FooterSocial = () => {
  return (
    <div
      css={(theme) => ({
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
        '& > a': {
          display: 'flex',

          '& > svg': {
            width: '100%',
            width: '2rem',
            height: '2rem',
            fill: '#0000008A',
            transition: 'fill 0.3s',
            ':hover': {
              fill: theme.colors.secondary,
            },
          },
        },
      })}
    >
      <a href="https://instagram.com/inteshar">
        <RiWhatsappFill />
      </a>
      <a href="https://instagram.com/inteshar">
        <RiTwitterFill />
      </a>
      <a href="https://instagram.com/inteshar">
        <RiInstagramFill />
      </a>
      <a href="https://instagram.com/inteshar">
        <RiFacebookBoxFill />
      </a>
    </div>
  );
};

export default FooterSocial;
