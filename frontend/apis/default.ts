import { mergeObject } from '@/helpers/mergeObject';

export const getPath = (path: string) => `http://localhost:3100${path}`;

export const fetchData = async (url: string, options?: RequestInit) => {
  const params = mergeObject(
    {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      cache: 'no-store',
      headers: {
        'Content-type': `application/json`,
      },
    },
    options
  );
  const response = await fetch(getPath(url), params);
  if (!response.ok) throw new Error(`Error ${response.status}`);
  return response;
};
