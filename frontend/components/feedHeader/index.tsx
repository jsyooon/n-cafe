import Link from 'next/link';
import ArticleHeader from '@/components/articleHeader';
import type { FeedItem } from '@/types/feed';

interface Props {
  item: FeedItem;
}

export default function FeedHeader({ item }: Props) {
  return (
    <ArticleHeader writer={item.writer} createdAt={item.createdAt}>
      {item.isMine ? (
        <>
          <Link href={`/write?feedId=${item.id}`}>수정</Link>
          <button type='button'>삭제</button>
          <button type='button'>공유</button>
        </>
      ) : (
        <>
          <button type='button'>스크랩</button>
          <button type='button'>공유</button>
          <button type='button'>신고</button>
        </>
      )}
    </ArticleHeader>
  );
}
