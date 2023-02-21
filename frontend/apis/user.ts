import { fetchData } from '@/apis/default';
import { cookieToString } from '@/helpers/cookie';
import type { UserType } from '@/types/user';

export const getSignupUser = async (cookie: { [key in string]: any }): Promise<UserType | null> => {
  try {
    const response = await fetchData('/user/signup', { headers: { Cookie: cookieToString(cookie) } });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
