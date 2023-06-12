import News, { NewsDataType } from './news/news';
import Sources, { SourcesDataType } from './sources/sources';
import Letters from './letters/letters';

export type DrawNewsDataType = {
  articles: NewsDataType[];
};

export type DrawSourcesDataType = {
  sources: SourcesDataType[];
};

export class AppView {
  news: News;

  sources: Sources;

  letters: Letters;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
    this.letters = new Letters();
  }

  public drawNews(data?: DrawNewsDataType) {
    const values: NewsDataType[] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  public drawSources(data?: DrawSourcesDataType) {
    const values: SourcesDataType[] = data?.sources ? data?.sources : [];
    this.sources.draw(values);

    const sources = this.sources;
    sources.filterByAlphabet('A', values);
  }

  public drawLetters(sourcesData?: DrawSourcesDataType) {
    this.letters.draw(sourcesData?.sources);
  }
}

export default AppView;
