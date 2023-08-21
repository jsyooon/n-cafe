import FeedHeader from '@/components/feedHeader';
import type { PropsWithChildren } from 'react';
import type { FeedPreviewItem } from '@/types/feed';
import styles from './styles.module.scss';

interface Props {
  data: FeedPreviewItem;
}

export default function FeedItem({ data, children }: PropsWithChildren<Props>) {
  return (
    <div className={styles.feedItem}>
      <FeedHeader data={data} />
      {children}
    </div>
  );
}
