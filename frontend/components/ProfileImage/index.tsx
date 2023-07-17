'use client';

import { AiOutlineUser } from 'react-icons/ai';
import styles from './style.module.scss';

export default function ProfileImage({ src, size }: { src?: string; size?: number }) {
  return (
    <span className={styles.profile}>
      {src ? <img src={src} /> : <AiOutlineUser />}
      <style jsx>{`
        span {
          ${size ? `width: ${size}px` : ''};
        }
      `}</style>
    </span>
  );
}
