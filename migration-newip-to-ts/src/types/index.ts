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
