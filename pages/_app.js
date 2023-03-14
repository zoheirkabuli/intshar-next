import 'normalize.css';
import '@/styles/globals.css';
import { Vazirmatn } from 'next/font/google';
import { ThemeProvider } from '@emotion/react';
import { ApolloProvider } from '@apollo/client';
import client from '@/lib/apollo-client';

// * components
import Layout from '@/components/layout/Layout';

// * font
const vazir = Vazirmatn({ subsets: ['arabic'], weight: 'variable' });

// * theme
const theme = {
  colors: {
    primary: '#fec200',
    secondary: '#f4cf4b',
    bg: '#d1d2d64f',
    darkerBg: '#d9d9d9',
    nightBg: '#1e2f47',
    nightDarkerBg: '#1e2f47',
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
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
