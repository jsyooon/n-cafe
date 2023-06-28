import type { PropsWithChildren } from 'react';
import styles from './style.module.scss';

export default function UserLayout({ children }: PropsWithChildren) {
  return <div className={`${styles.userStyle} container`}>{children}</div>;
}
