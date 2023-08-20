import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Editor from './editor';
import { fetchFeedItem } from '@/queries/useFeedQuery';

export default async function Write({ searchParams: { feedId } }) {
  const feedItem = feedId ? await fetchFeedItem(feedId, cookies().getAll()) : null;
  if (feedItem && !feedItem.isMine) redirect('/error/401');

  return <Editor data={{ id: feedId, content: feedItem?.content, images: feedItem?.images }} />;
}
