import 'normalize.css';
import '@/styles/globals.css';
import { Vazirmatn } from 'next/font/google';
import { ThemeProvider } from '@emotion/react';

// * font
const vazir = Vazirmatn({ subsets: ['arabic'], weight: 'variable' });

// * theme
const theme = {
  colors: {
    colorPrimary: '#fec200',
    colorSecondary: '#f4cf4b',
    colorBg: '#d1d2d64f',
    colorDarkerBg: '#d9d9d9',
    colorNightBg: '#1e2f47',
    colorNightDarkerBg: '#1e2f47',
  },
  size: {
    width: '91.666667%',
    maxWidth: '128rem',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${vazir.style.fontFamily};
        }
      `}</style>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
