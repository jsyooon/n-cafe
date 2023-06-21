'use client';

import Button from '@/components/Button';
import styles from './style.module.scss';

interface PropsType {
  status: number;
  type: string;
  message?: string;
}

export default function ErrorLayout({ status, type, message }: PropsType) {
  return (
    <div className={styles.errorStyle}>
      <h2>
        <span className='status'>{status}</span>
        <span className='type'>{type}</span>
      </h2>
      {message && <p className='message'>{message}</p>}
      <div className='button-wrap'>
        <Button href='/' style={{ fillType: 'border', borderColor: 'rgba(var(--black-color), 0.3)', padding: '0 1em' }}>
          홈으로
        </Button>
      </div>
    </div>
  );
}
