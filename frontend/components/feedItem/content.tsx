import type { FeedItem } from '@/types/feed';

interface Props {
  content: FeedItem['content'];
}

export default function Content({ content }: Props) {
  return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
}
