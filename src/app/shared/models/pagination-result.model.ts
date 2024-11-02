import { Support } from './result.model';

export interface PaginationResult<T> {
  data: T[];
  support: Support;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
