import type { AppProps } from 'next/app';
import AppLayout from '@/components/Layout/App';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}
