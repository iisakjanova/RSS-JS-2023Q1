import AppController from '../controller/controller';

import {
  AppView,
  DrawNewsDataType,
  DrawSourcesDataType,
} from '../view/appView';

class App {
  controller: AppController;

  view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    const sourcesElement: HTMLElement | null = document.querySelector(
      '.sources',
    );

    if (sourcesElement !== null) {
      sourcesElement.addEventListener('click', (e: Event) =>
        this.controller.getNews(e, (data?: DrawNewsDataType) =>
          this.view.drawNews(data),
        ),
      );
    }

    this.controller.getSources((data?: DrawSourcesDataType) => {
      this.view.drawSources(data);
      this.view.drawLetters(data);
    });
  }
}

export default App;
