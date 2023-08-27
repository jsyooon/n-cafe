import Writer from '@/components/writer';
import type { FeedPreviewItem } from '@/types/feed';
import styles from './styles.module.scss';

interface Props {
  data: FeedPreviewItem['recentComments'];
}

export default function RecentComments({ data }: Props) {
  return data.map((comment) => (
    <div className={styles.recentComments} key={comment.id}>
      <Writer id={comment.writer.id} name={comment.writer.name} />
      <div className='comment-content'>{comment.content}</div>
    </div>
  ));
}
