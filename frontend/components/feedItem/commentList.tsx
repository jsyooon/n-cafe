import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

export default function CommentList({ children }: PropsWithChildren) {
  return <div className={styles.commentsList}>{children}</div>;
}
