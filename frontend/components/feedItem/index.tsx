import FeedHeader from '@/components/feedHeader';
import type { PropsWithChildren } from 'react';
import type { FeedItemCommon } from '@/types/feed';
import styles from './styles.module.scss';

interface Props {
  data: FeedItemCommon;
}

export default function FeedItem({ data, children }: PropsWithChildren<Props>) {
  return (
    <div className={styles.feedItem}>
      <FeedHeader data={data} />
      {children}
    </div>
  );
}
