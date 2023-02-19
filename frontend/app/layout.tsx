'use client';

import axios from 'axios';
import { Global } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import Header from '@/components/Header';
import { globalStyle, contentStyle } from '@/styles/globalstyle';

axios.defaults.baseURL = 'http://localhost:3100';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Global styles={globalStyle} />
      <html>
        <head>
          <title>N Cafe</title>
        </head>
        <body>
          <RecoilRoot>
            <Header />
            <section css={contentStyle}>{children}</section>
          </RecoilRoot>
        </body>
      </html>
    </>
  );
}
