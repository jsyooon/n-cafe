'use client';

import { AiOutlineUser } from 'react-icons/ai';
import styles from './style.module.scss';

export default function ProfileImage({ src, size }: { src?: string; size?: number }) {
  return (
    <div className={styles.profileStyle}>
      {src ? <img src={src} /> : <AiOutlineUser />}
      <style jsx>{`
        div {
          ${size && `width: ${size}px`};
        }
      `}</style>
    </div>
  );
}
