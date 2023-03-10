import Head from 'next/head';
import { Global } from '@emotion/react';
import Header from '@/components/Header';
import { globalStyle, layoutStyle } from '@/components/Layout/style';

export default function AppLayout({ children }: { children: React.ReactElement }) {
  return (
    <>
      <Head>
        <title>n cafe</title>
      </Head>
      <Global styles={globalStyle} />
      <Header />
      <div css={layoutStyle}>{children}</div>
    </>
  );
}
