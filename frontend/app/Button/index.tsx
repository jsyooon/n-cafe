'use client';

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
        <a href={href}>{children}</a>
      ) : (
        <button type='button' onClick={onClick} disabled={disabled}>
          <span>{children}</span>
        </button>
      )}

      <style jsx>{`
        a {
          line-height: ${style.height};
          text-decoration: none;
          text-align: center;
        }
        a,
        button {
          position: relative;
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

          &:before {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            content: '';
          }

          &:hover {
            &:before {
              background-color: rgba(var(--black-color), 0.03);
              transition: background-color 0.2s;
            }
          }

          &:disabled {
            opacity: 0.1;
          }

          > span {
            position: relative;
          }
        }
      `}</style>
    </>
  );
}
