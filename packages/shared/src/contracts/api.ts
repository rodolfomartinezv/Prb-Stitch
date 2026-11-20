export interface ApiMeta {
  timestamp: string;
  total?: number;
  page?: number;
  pageSize?: number;
}

export interface ApiResponseSuccess<T> {
  success: true;
  data: T;
  meta: ApiMeta;
}

export interface ApiResponseError {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
  meta: {
    timestamp: string;
  };
}

export type ApiResponse<T> = ApiResponseSuccess<T> | ApiResponseError;

