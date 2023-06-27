export type ResponseType<T = any> = { status: number; ok: boolean; data: T; message?: string };

export type FetchResponsType<T> = Promise<ResponseType<T>>;

export type CookieItemType = Array<{
  name: string;
  value: any;
}>;

export interface FetchOptionType<T = any> {
  cookie?: string | CookieItemType;
  body?: T;
}
