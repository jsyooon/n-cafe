import FeedItemHeader from '@/components/feedItem/header';
import type { PropsWithChildren } from 'react';
import type { FeedItemCommon } from '@/types/feed';
import styles from './styles.module.scss';

interface Props {
  data: FeedItemCommon;
}

export default function FeedItem({ data, children }: PropsWithChildren<Props>) {
  return (
    <article className={styles.feedItem}>
      <FeedItemHeader data={data} />
      {children}
    </article>
  );
}
