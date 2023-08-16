import { useQuery } from '@tanstack/react-query';
import { fetchGet } from '@/helpers/fetch';
import type { CookieItemType } from '@/types/fetch';
import type { FeedPreviewList } from '@/types/feed';

export const FEEDS_LIST_QUERY_KEY = ['feedList'] as const;

const fetchFeedList = (cookie?: CookieItemType) => fetchGet<FeedPreviewList>('/feeds', cookie ? { cookie } : {}).then((response) => response?.data);

export const fetchFeedListOnClient = () => fetchFeedList();

export const fetchFeedListOnServer = (cookie: CookieItemType) => fetchFeedList(cookie);

export const useFeedListQuery = () => useQuery({ queryKey: FEEDS_LIST_QUERY_KEY, queryFn: fetchFeedListOnClient });
