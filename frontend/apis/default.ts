import { mergeObject } from '@/helpers/mergeObject';

export const getPath = (path: string) => `http://localhost:3100${path}`;

export const fetchData = async <T>(url: string, options?: RequestInit) => {
  try {
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
    const data: T = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
