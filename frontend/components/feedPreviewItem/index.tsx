import FeedItem from '@/components/feedItem';
import FeedImages from '@/components/feedImages';
import type { FeedPreviewItem } from '@/types/feed';
import styles from './styles.module.scss';

interface Props {
  data: FeedPreviewItem;
}

export default function FeedPreviewItem({ data }: Props) {
  const onClickFeed = () => {};

  return (
    <FeedItem data={data}>
      <div dangerouslySetInnerHTML={{ __html: data.summary }} className={styles.feedBody} onClick={onClickFeed}></div>
      {data.images?.length > 0 && <FeedImages images={data.images} />}
    </FeedItem>
  );
}
