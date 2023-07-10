import { Noto_Sans_KR, Figtree } from 'next/font/google';
import Header from '@/app/header/index';
import StyledJsxRegistry from '@/app/registry';
import ReactQueryProvider from '@/app/react-query-provider';
import RecoilRoot from '@/app/recoil-root';
import Toast from '@/components/toast';
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
        <main id='app'>
          <ReactQueryProvider>
            <RecoilRoot>
              <Header />
              <section>{children}</section>
              <Toast />
            </RecoilRoot>
          </ReactQueryProvider>
        </main>
        <StyledJsxRegistry />
      </body>
    </html>
  );
}
