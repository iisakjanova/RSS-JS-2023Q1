import { NewsDataType, SourcesDataType } from '../../types';
import AppController from '../controller/controller';

import { AppView } from '../view/appView';
import { LoadResponse } from '../controller/loader';

interface IApp {
  start(): void;
}

class App implements IApp {
  controller: AppController;

  sourcesData?: LoadResponse<SourcesDataType>;

  view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start() {
    const sourcesElement: HTMLElement | null = document.querySelector(
      '.sources',
    );

    if (sourcesElement !== null) {
      sourcesElement.addEventListener('click', (e: Event) =>
        this.controller.getNews(e, (data?: LoadResponse<NewsDataType>) =>
          this.view.drawNews(data),
        ),
      );
    }

    this.controller.getSources((data?: LoadResponse<SourcesDataType>) => {
      this.sourcesData = data;
      this.view.drawSources(data);
    });

    this.view.drawLetters((letter: string) => {
      this.view.drawSources(this.sourcesData, letter);
    });
  }
}

export default App;
