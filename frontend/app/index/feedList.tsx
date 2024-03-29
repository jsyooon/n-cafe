'use client';

import { useFeedListQuery } from '@/queries/feed';
import FeedPreviewItem from '@/components/feedPreviewItem';
import styles from './styles.module.scss';

export default function FeedList() {
  const { data } = useFeedListQuery();

  return (
    <div className={styles.feedList}>
      {data?.length ? data.map((item) => <FeedPreviewItem data={item} key={item.id} />) : <div>피드가 없습니다.</div>}
    </div>
  );
}
