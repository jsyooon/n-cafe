import type { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

export default function FeedFooter({ children }: PropsWithChildren) {
  return <div className={styles.footer}>{children}</div>;
}
