import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ncafe',
};

export default function Page() {
  return (
    <div className='container'>
      <h1>Hello, Home page!</h1>
    </div>
  );
}
