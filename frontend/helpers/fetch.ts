import type { FetchOptionType, ResponseType, CookieItemType } from '@/types/fetch';
import FetchError from '@/helpers/FetchError';

const API_DOMAIN = 'http://localhost:3100';

const getResponseData = <T>(response: Response, data: T): ResponseType<T> => {
  return {
    ok: true,
    status: response.status,
    data,
  };
};

const getHeaderWithCookie = (cookie?: CookieItemType): RequestInit['headers'] => {
  if (Array.isArray(cookie)) {
    return {
      Cookie: cookie?.map(({ name, value }) => `${name}=${value}`)?.join('&'),
    };
  }

  if (typeof cookie === 'string') {
    return { Cookie: cookie };
  }

  return {};
};

const getResponse = async <T>(response: Response) => {
  const contentType = response.headers.get('content-type');

  if (contentType.includes('text/html')) {
    return getResponseData(response, (await response.text()) as T);
  }

  if (contentType.includes('application/json')) {
    return getResponseData<T>(response, await response.json());
  }
};

const defaultParams = {
  mode: 'cors',
  credentials: 'include',
} as const;

const fetchCommon = async <T>(url: string, options?: RequestInit) => {
  try {
    const response = await fetch(new URL(url, API_DOMAIN), {
      ...defaultParams,
      ...options,
    });
    if (!response.ok) {
      const message = await response.text();
      throw new FetchError({ status: response.status, message });
    }
    return getResponse<T>(response);
  } catch (error) {
    console.error(error);
  }
};

export const fetchGet = <T = string>(url: string, options?: FetchOptionType) => {
  const headers = getHeaderWithCookie(options?.cookie);
  headers['Content-Type'] = 'application/json';
  return fetchCommon<T>(url, { method: 'GET', headers });
};

export const fetchPost = <T = string>(url: string, options?: FetchOptionType) => {
  const headers = getHeaderWithCookie(options?.cookie);

  let { body } = options;

  if (body instanceof Object && !(body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
    body = JSON.stringify(body);
  } else if (typeof body === 'number' || typeof body === 'string') {
    headers['Content-Type'] = 'text/plain';
  }

  return fetchCommon<T>(url, { method: 'POST', headers, body });
};

export const fetchPut = <T = string>(url: string, options?: FetchOptionType) => {
  const headers = getHeaderWithCookie(options?.cookie);

  let { body } = options;

  if (body instanceof Object && !(body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
    body = JSON.stringify(body);
  } else if (typeof body === 'number' || typeof body === 'string') {
    headers['Content-Type'] = 'text/plain';
  }

  return fetchCommon<T>(url, { method: 'PUT', headers, body });
};
