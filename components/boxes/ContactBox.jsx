/** @jsxImportSource @emotion/react */

const ContactBox = ({ icon, title, content }) => {
  const Icon = icon;
  return (
    <div css={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div css={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Icon
          css={(theme) => ({
            width: '2.5rem',
            height: 'auto',
            fill: theme.colors.primary,
          })}
        />
        <p css={{ fontWeight: '700' }}>{title}</p>
      </div>

      <div
        css={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
          color: '#00000080',
          fontSize: '1.5rem',
        }}
      >
        <div css={{ width: '2.5rem' }}></div>
        {content}
      </div>
    </div>
  );
};

export default ContactBox;
