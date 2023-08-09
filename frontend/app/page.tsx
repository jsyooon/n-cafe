import { cookies } from 'next/headers';
import HydrateOnServer from '@/app/hydrate-on-server';
import FeedList from '@/app/index/feedList';
import { FEEDS_LIST_QUERY_KEY, fetchFeedListOnServer } from '@/queries/useFeedQuery';

export default function Page() {
  return (
    <HydrateOnServer queryKey={FEEDS_LIST_QUERY_KEY} queryFn={() => fetchFeedListOnServer(cookies().getAll())}>
      <FeedList />
    </HydrateOnServer>
  );
}
