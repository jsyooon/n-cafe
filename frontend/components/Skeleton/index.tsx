'use client';

import { style } from './style';

interface Props {
  type: 'circle' | 'rectangle' | 'text';
  width: number;
  height?: number;
  round?: boolean;
}

export default function Skeleton(props: Props) {
  return (
    <div>
      <style jsx>{style}</style>
    </div>
  );
}
