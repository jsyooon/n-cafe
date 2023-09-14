import type { ResponseType } from '@/types/fetcher';

type ParameterType = Pick<ResponseType, 'status'> & { message: string };

class FetchError extends Error {
  ok: boolean;
  status: number;
  message: string;

  constructor(response: ParameterType) {
    super();
    this.ok = false;
    this.status = response.status;
    this.message = response.message;
  }
}

export default FetchError;
