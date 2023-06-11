import News, { NewsDataType } from './news/news';
import Sources, { SourcesDataType } from './sources/sources';

export type DrawNewsDataType = {
  articles: NewsDataType[];
};

export type DrawSourcesDataType = {
  sources: SourcesDataType[];
};

export class AppView {
  news: News;

  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data?: DrawNewsDataType) {
    const values: NewsDataType[] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  public drawSources(data?: DrawSourcesDataType) {
    const values: SourcesDataType[] = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
