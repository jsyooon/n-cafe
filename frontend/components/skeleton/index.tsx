'use client';

import styles from './style.module.scss';

interface Props {
  type: 'circle' | 'rectangle' | 'text';
  width: number;
  height?: number;
  round?: boolean;
}

export default function Skeleton(props: Props) {
  return (
    <div className={styles.skeleton}>
      <style jsx>{`
        div {
          width: ${props.width}px;
          height: ${props.type === 'circle' ? props.width : props.height ?? props.width}px;
          border-radius: ${props.type === 'circle' ? '100%' : props.round ? '2em' : ''};
        }
      `}</style>
    </div>
  );
}
