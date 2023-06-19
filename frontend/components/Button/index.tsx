'use client';

import Link from 'next/link';
import { buttonStyle } from './style';
import type { PropsWithChildren } from 'react';

interface PropsType {
  href?: string;
  style?: {
    outline?: true;
    width?: number | string;
    height?: number | string;
    padding?: string;
    margin?: string;
    fontSize?: number | string;
    radius?: string;
    fillType?: 'fill' | 'border';
    color?: string;
    colorType?: string;
    borderColor?: string;
    backgroundColor?: string;
  };
  disabled?: boolean;

  onClick?: () => any;
}

export default function Button({ children, href, style = { colorType: 'point', fillType: 'fill' }, disabled, onClick }: PropsWithChildren<PropsType>) {
  return (
    <>
      {href ? (
        <Link href={href}>{children}</Link>
      ) : (
        <button type='button' onClick={onClick} disabled={disabled}>
          <span>{children}</span>
        </button>
      )}

      <style jsx>{buttonStyle}</style>
      <style jsx>{`
        :global(a) {
          line-height: ${style.height};
        }
        a,
        button {
          ${style.width ? `width: ${style.width}` : ''};
          ${style.height ? `height: ${style.height}` : ''};
          border: ${style.fillType === 'border' ? style.borderColor ?? `1px solid var(--${style.colorType}-color)` : 0};
          color: ${style.color ?? style.fillType === 'border' ? `rgb(var(--${style.colorType}-color))` : 'rgb(var(--white-color))'};
          font-size: ${style.fontSize ? `${style.fontSize}` : 'inherit'};
          background-color: ${style.fillType === 'border' ? 'rgb(var(--white-color))' : style.backgroundColor ?? `rgb(var(--${style.colorType}-color))`};
          padding: ${style.padding ?? 0};
          margin: ${style.margin ?? 0};
          cursor: pointer;
          ${style.radius ? `border-radius: ${style.radius}` : ''};
        }
      `}</style>
    </>
  );
}
