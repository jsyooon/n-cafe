import { Noto_Sans_KR, Figtree } from 'next/font/google';
import Header from '@/components/Header';
import StyledJsxRegistry from './registry';
import type { PropsWithChildren } from 'react';
import '@/styles/global.scss';

const noto_sans_korea = Noto_Sans_KR({
  weight: ['300', '400', '700'],
  preload: false,
  variable: '--font-noto-sans',
});

const figtree = Figtree({
  weight: ['400', '700'],
  preload: false,
  variable: '--font-figtree',
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='ko' className={`${noto_sans_korea.variable} ${figtree.variable}`}>
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
