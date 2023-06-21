'use client';

import Link from 'next/link';
import styles from './style.module.scss';
import type { PropsWithChildren } from 'react';

interface PropsType {
  href?: string;
  type?: 'submit' | 'button';
  style?: {
    outline?: true;
    width?: number | string;
    height?: string;
    padding?: string;
    fontSize?: number | string;
    radius?: boolean;
    fillType?: 'fill' | 'border';
    color?: string;
    borderColor?: string;
    fillColor?: string;
  };
  disabled?: boolean;

  onClick?: () => any;
}

export default function Button({ children, href, type, style, disabled, onClick }: PropsWithChildren<PropsType>) {
  return (
    <>
      {href ? (
        <span className={`button ${styles.buttonStyle}`}>
          <Link href={href}>{children}</Link>
        </span>
      ) : (
        <button type={type ?? 'button'} onClick={onClick} disabled={disabled} className={`button ${styles.buttonStyle}`}>
          <span>{children}</span>
        </button>
      )}

      <style jsx>{`
        .button {
          ${style.width ? `width: ${style.width}` : ''};
          height: ${style.height ?? '2.5em'};
          border: ${style.fillType === 'border' ? `1px solid ${style.borderColor ?? style.color}` : 0};
          color: ${style.color ? style.color : style.fillType === 'border' ? 'inherit' : 'rgb(var(--white-color))'};
          font-size: ${style.fontSize ? `${style.fontSize}` : 'inherit'};
          background-color: ${style.fillType === 'border' ? 'rgb(var(--white-color))' : style.fillColor ?? style.color};
          line-height: ${style.height ?? '2.5em'};
        }

        .button :global(a),
        button {
          ${style.padding ? `padding: ${style.padding}` : ''};
        }
      `}</style>
    </>
  );
}
