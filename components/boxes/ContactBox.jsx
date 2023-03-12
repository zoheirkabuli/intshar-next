/** @jsxImportSource @emotion/react */

const ContactBox = ({ icon, title, content }) => {
  const Icon = icon;
  return (
    <div
      css={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2rem' }}
    >
      <Icon
        css={(theme) => ({
          fontSize: '2.5rem',
          fill: theme.colors.primary,
        })}
      />
      <div css={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <p css={{ fontWeight: '700' }}>{title}</p>
        <div css={{ display: 'flex', gap: '1rem', color: '#00000080' }}>
          {content}
        </div>
      </div>
    </div>
  );
};

export default ContactBox;
