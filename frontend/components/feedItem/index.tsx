import FeedHeader from '@/components/feedHeader';
import type { PropsWithChildren } from 'react';
import type { FeedPreviewItem } from '@/types/feed';
import styles from './styles.module.scss';

interface Props {
  item: FeedPreviewItem;
}

export default function FeedItem({ item, children }: PropsWithChildren<Props>) {
  return (
    <div className={styles.feedItem}>
      <FeedHeader item={item} />
      {children}
    </div>
  );
}
