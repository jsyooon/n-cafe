import FeedHeader from '@/components/feedHeader';
import FeedImages from '@/components/feedImages';
import type { FeedPreviewItem } from '@/types/feed';
import styles from './styles.module.scss';

interface Props {
  item: FeedPreviewItem;
}

export default function FeedItem({ item }: Props) {
  return (
    <div className={styles.feedItem}>
      <FeedHeader item={item} />
      <div dangerouslySetInnerHTML={{ __html: item.summary }} className='summary'></div>
      {item.images?.length > 0 && <FeedImages images={item.images} />}
    </div>
  );
}
