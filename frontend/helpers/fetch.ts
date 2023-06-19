import { mergeObject } from '@/helpers/mergeObject';

export const API_DOMAIN = 'http://localhost:3100';

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

    const response = await fetch(new URL(url, API_DOMAIN), params);
    if (!response.ok) throw new Error(response.status.toString());
    const data: T = await response.json();
    return {
      ok: true,
      status: response.status,
      data,
    };
  } catch (error) {
    console.error(error);
    return {
      status: +error.message,
      ok: false,
      data: null,
    };
  }
};
