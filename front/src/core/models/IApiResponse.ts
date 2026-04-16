export interface IApiResponse<T> {
  success: boolean;
  code: number;
  message: string;
  data: T;
}
