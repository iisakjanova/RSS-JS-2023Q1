// export interface NewsSourcesResponse {
//   status: string;
//   sources: NewsSource[];
// }

// export interface NewsSource {
//   id: string;
//   name: string;
//   description: string;
//   url: string;
//   category: string;
//   language: string;
//   country: string;
// }

export type SourcesDataType = {
  id: string;
  name: string;
};

export type NewsDataType = {
  title: string;
  name: string;
  description: string;
  source: {
    name: string;
  };
  author?: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
};

export type LetterClickType = (letter: string) => void;
