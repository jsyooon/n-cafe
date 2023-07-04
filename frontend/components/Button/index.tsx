'use client';

import Link from 'next/link';
import styles from './style.module.scss';
import type { PropsWithChildren } from 'react';

interface PropsType {
  href?: string;
  type?: 'submit' | 'button';
  className?: string;
  disabled?: boolean;
  onClick?: () => any;
}

export default function Button({ children, href, type, disabled, className, onClick }: PropsWithChildren<PropsType>) {
  const buttonClassName = `button ${className ?? ''} ${styles.buttonStyle}`;
  return (
    <>
      {href ? (
        <Link href={href} className={buttonClassName}>
          <span>{children}</span>
        </Link>
      ) : (
        <button type={type ?? 'button'} onClick={onClick} disabled={disabled} className={buttonClassName}>
          <span>{children}</span>
        </button>
      )}
    </>
  );
}
