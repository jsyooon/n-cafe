import FeedItem from '@/components/feedItem';
import FeedImages from '@/components/feedImages';
import type { FeedPreviewItem } from '@/types/feed';
import styles from './styles.module.scss';

interface Props {
  item: FeedPreviewItem;
}

export default function FeedPreviewItem({ item }: Props) {
  return (
    <FeedItem item={item}>
      <div dangerouslySetInnerHTML={{ __html: item.summary }} className={styles.feedBody}></div>
      {item.images?.length > 0 && <FeedImages images={item.images} />}
    </FeedItem>
  );
}
