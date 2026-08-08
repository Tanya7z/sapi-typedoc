export type DocEntry = {
  module: string;
  title: string;
  path: string;
  summary: string;
};

export type SearchHit = DocEntry & {
  score: number;
};
