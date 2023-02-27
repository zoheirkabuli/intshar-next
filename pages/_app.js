import 'normalize.css';
import '@/styles/globals.css';
import { Vazirmatn } from 'next/font/google';

const vazir = Vazirmatn({ subsets: ['arabic'], weight: 'variable' });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${vazir.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
