import { fetchGet } from '@/helpers/fetch';
import { useQuery } from '@tanstack/react-query';
import type { UserType } from '@/types/user';
import { type CookieItemType } from '@/types/fetch';

export const USER_QUERY_KEY = ['user'] as const;

let fetchUserPromise: () => Promise<UserType>;

export const fetchUser = (cookie?: CookieItemType) => {
  fetchUserPromise ??= () => fetchGet<UserType>('/user', { cookie }).then((response) => response?.data);
  return fetchUserPromise;
};

export const useUserQuery = () => useQuery({ queryKey: USER_QUERY_KEY, queryFn: fetchUser(), refetchOnMount: false });
