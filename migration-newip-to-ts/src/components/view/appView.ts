import News from './news/news';
import Sources from './sources/sources';
import Letters from './letters/letters';
import { LoadResponse } from '../controller/loader';
import { NewsDataType, SourcesDataType, LetterClickType } from '../../types';

interface IAppView {
  drawNews(data?: LoadResponse<NewsDataType>): void;
  drawSources(data?: LoadResponse<SourcesDataType>): void;
  drawLetters(onLetterClick: LetterClickType): void;
}

export class AppView implements IAppView {
  news: News;

  sources: Sources;

  letters: Letters;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
    this.letters = new Letters();
  }

  public drawNews(data?: LoadResponse<NewsDataType>) {
    const values: NewsDataType[] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  public drawSources(data?: LoadResponse<SourcesDataType>, letter?: string) {
    const values: SourcesDataType[] = data?.sources ? data?.sources : [];
    const selectedLetter = letter || 'A';
    this.sources.draw(values, selectedLetter);
  }

  public drawLetters(onLetterClick: LetterClickType) {
    this.letters.draw(onLetterClick);
  }
}

export default AppView;
