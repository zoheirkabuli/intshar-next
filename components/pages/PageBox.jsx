/** @jsxImportSource @emotion/react */
import Image from 'next/image';

const PageBox = ({ page }) => {
  return (
    <div
      css={(theme) => ({
        width: theme.size.width,
        maxWidth: theme.size.maxWidth,
        alignSelf: 'center',
        marginTop: '2rem',
        display: 'flex',
        gap: '2.5rem',
      })}
    >
      <div css={{ width: '75%' }}></div>
      <Image
        src={page.featuredImage.url}
        alt={page.title}
        width="400"
        height="500"
        css={{
          width: '25%',
          height: 'auto',
          objectFit: 'cover',
          borderRadius: '1rem',
        }}
      />
    </div>
  );
};

export default PageBox;
