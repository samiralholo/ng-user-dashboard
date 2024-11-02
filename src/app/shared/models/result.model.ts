export interface GResult<T> {
  data: T;
  support: Support;
}

export interface Support {
  url: string;
  text: string;
}
