import { GResult } from './result.model';

export interface PaginationResult<T> extends GResult<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
