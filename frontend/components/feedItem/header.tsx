import Link from 'next/link';
import ArticleHeader from '@/components/articleHeader';
import type { FeedItem } from '@/types/feed';

interface Props {
  data: Pick<FeedItem, 'id' | 'isMine' | 'writer' | 'createdAt'>;
}

export default function FeedItemHeader({ data }: Props) {
  return (
    <ArticleHeader writer={data.writer} createdAt={data.createdAt}>
      {data.isMine ? (
        <>
          <Link href={`/write?feedId=${data.id}`}>수정</Link>
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
