export type FetchResponsType<T> = Promise<{ status: number; ok: boolean; data: T }>;
