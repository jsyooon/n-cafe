import { useEffect, useRef, useState } from 'react';
import FeedItem from '@/components/feedItem';
import FeedImages from '@/components/feedImages';
import FeedContent from '@/components/feedItem/content';
import CommentCount from '@/components/feedItem/commentCount';
import CommentList from '@/components/feedItem/commentList';
import FeedFooter from '@/components/feedItem/footer';
import RecentComments from '@/components/feedPreviewItem/recentComments';
import UpDownButton from '@/components/feedPreviewItem/upDownButton';
import { VscChevronDown } from 'react-icons/vsc';
import { useFeedItemQuery } from '@/queries/feed';
import type { FeedPreviewItem } from '@/types/feed';
import styles from './styles.module.scss';

interface Props {
  data: FeedPreviewItem;
}

export default function FeedPreviewItem({ data }: Props) {
  const [more, setMore] = useState(false);
  const [loadFeedItem, setLoadFeedItem] = useState(false);
  const summary = useRef<HTMLDivElement>();

  const { data: feedItemData } = useFeedItemQuery(data.id, { enabled: loadFeedItem });

  const getComment = () => {};

  useEffect(() => {
    if (summary.current) setMore(summary.current.offsetHeight < summary.current.scrollHeight);
  }, [data.summary]);

  return (
    <FeedItem data={data}>
      {feedItemData ? (
        <FeedContent content={feedItemData.content} />
      ) : (
        <>
          <div className={styles.feedBody} onClick={() => setLoadFeedItem(true)}>
            <div dangerouslySetInnerHTML={{ __html: data.summary }} className='summary' ref={summary}></div>
            {more && <span className='more'>...더보기</span>}
          </div>
          {data.images?.length > 0 && <FeedImages images={data.images} />}
        </>
      )}
      <FeedFooter>
        <button type='button' className={styles.commentCountButton} onClick={getComment}>
          <CommentCount count={data.reactions.comments} />
          {data.reactions.comments > 0 && <VscChevronDown size={16} />}
        </button>
        <UpDownButton data={data} />
      </FeedFooter>
      {data.recentComments.length > 0 && (
        <CommentList>
          <RecentComments data={data.recentComments} />
        </CommentList>
      )}
    </FeedItem>
  );
}
