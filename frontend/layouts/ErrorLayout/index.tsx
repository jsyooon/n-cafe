'use client';

import Button from '@/components/Button';
import { errorStyle } from './style';

interface PropsType {
  status: number;
  type: string;
  message?: string;
}

export default function ErrorLayout({ status, type, message }: PropsType) {
  return (
    <div className='error-wrap'>
      <h2>
        <span className='status'>{status}</span>
        <span className='type'>{type}</span>
      </h2>
      {message && <p className='message'>{message}</p>}
      <div className='button-wrap'>
        <Button href='/'>홈으로</Button>
      </div>
      <style jsx>{errorStyle}</style>
    </div>
  );
}
