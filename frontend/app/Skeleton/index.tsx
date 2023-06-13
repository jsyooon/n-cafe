'use client';

import { style } from './style';

interface Props {
  type: 'circle' | 'rectangle' | 'text';
  width?: number;
  height?: number;
  round?: boolean;
}

export default function Skeleton({ type, width, height, round }: Props) {
  return (
    <div>
      <style jsx>{style}</style>
      <style jsx>
        {`
          div {
            width: ${width}px;
            height: ${height}px;
            ${type === 'circle' ? 'border-radius: 100%' : ''};
            ${round ? 'border-radius: 2em' : ''};
          }
        `}
      </style>
    </div>
  );
}
