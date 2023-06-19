import { Noto_Sans_KR } from 'next/font/google';
import Header from '@/components/Header';
import StyledJsxRegistry from './registry';
import '@/styles/global.scss';

const notosanskorea = Noto_Sans_KR({
  weight: ['300', '400', '700'],
  preload: false,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko' className={notosanskorea.className}>
      <head></head>

      <body>
        <StyledJsxRegistry>
          <main id='app'>
            <Header />
            <section>{children}</section>
          </main>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
