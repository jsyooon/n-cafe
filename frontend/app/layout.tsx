import Header from 'app/Header';
import StyledJsxRegistry from './registry';
import '@/styles/global.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body>
        <StyledJsxRegistry>
          <main id='app'>
            <Header />
            <section className='container'>{children}</section>
          </main>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
