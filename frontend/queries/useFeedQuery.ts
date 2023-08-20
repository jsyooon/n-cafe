import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/helpers/fetch';
import type { CookieItemType } from '@/types/fetch';
import type { FeedItem, FeedPreviewList } from '@/types/feed';

/* Feed List */

export const FEEDS_LIST_QUERY_KEY = ['feedList'] as const;

const fetchFeedList = (cookie?: CookieItemType) => fetcher<FeedPreviewList>('/feeds', 'GET', cookie ? { cookie } : {}).then((response) => response?.data);

export const fetchFeedListOnClient = () => fetchFeedList();

export const fetchFeedListOnServer = (cookie: CookieItemType) => fetchFeedList(cookie);

export const useFeedListQuery = () => useQuery({ queryKey: FEEDS_LIST_QUERY_KEY, queryFn: fetchFeedListOnClient });

/* Feed Item */

export const FEEDS_ITEM_QUERY_KEY = ['feedItem'] as const;

export const fetchFeedItem = (id: string, cookie?: CookieItemType) => fetcher<FeedItem>(`/feed/${id}`, 'GET', cookie ? { cookie } : {}).then((response) => response?.data);
