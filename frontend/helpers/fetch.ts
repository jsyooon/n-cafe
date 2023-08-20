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

const getCookie = (cookie?: CookieItemType): RequestInit['headers'] => {
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

const getHeader = (options?: FetchOptionType) => {
  const result = {
    headers: { ...getCookie(options?.cookie) },
    ...(options?.body ? { body: options.body } : null),
  };

  if (result.body instanceof Object && !(result.body instanceof FormData)) {
    result.headers['Content-Type'] = 'application/json';
    if (result.body) result.body = JSON.stringify(result.body);
  } else if (typeof result.body === 'number' || typeof result.body === 'string') {
    result.headers['Content-Type'] = 'text/plain';
  }

  return result;
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
  const headers = { ...getCookie(options?.cookie), 'Content-Type': 'application/json' };
  return fetchCommon<T>(url, { method: 'GET', headers });
};

export const fetchPost = <T = string>(url: string, options?: FetchOptionType) => {
  return fetchCommon<T>(url, { method: 'POST', ...getHeader(options) });
};

export const fetchPut = <T = string>(url: string, options?: FetchOptionType) => {
  return fetchCommon<T>(url, { method: 'PUT', ...getHeader(options) });
};

export const fetcher = <T = string>(url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET', options?: FetchOptionType) => {
  return fetchCommon<T>(url, { method, ...getHeader(options) });
};
