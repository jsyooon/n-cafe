import { fetchGet } from '@/helpers/fetch';
import { useQuery } from '@tanstack/react-query';
import type { UserType } from '@/types/user';
import { type CookieItemType } from '@/types/fetch';

export const USER_QUERY_KEY = ['user'] as const;

const fetchUser = (cookie?: CookieItemType) => fetchGet<UserType>('/user', cookie ? { cookie } : {}).then((response) => response?.data);

export const fetchUserOnClient = () => fetchUser();

export const fetchUserOnServer = (cookie: CookieItemType) => fetchUser(cookie);

export const useUserQuery = () => useQuery({ queryKey: USER_QUERY_KEY, queryFn: fetchUserOnClient, refetchOnMount: false });
