import ArticleHeader from '@/components/articleHeader';
import type { CommentItem } from '@/types/feed';

interface Props {
  data: CommentItem;
}

export default function CommentItem({ data }: Props) {
  return (
    <div>
      <ArticleHeader writer={data.writer} />
      <div>{data.content}</div>
    </div>
  );
}
