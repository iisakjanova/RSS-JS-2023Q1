import AppLoader from './appLoader';
import { Endpoint } from '../../constants';
import { LoadCallback } from './loader';
import type { NewsDataType, SourcesDataType } from '../../types';

interface IAppController {
  getSources(callback: LoadCallback<SourcesDataType>): void;
  getNews(e: Event, callback: LoadCallback<NewsDataType>): void;
}

class AppController extends AppLoader implements IAppController {
  public getSources(callback: LoadCallback<SourcesDataType>) {
    super.getResp(
      {
        endpoint: Endpoint.Sources,
      },
      callback,
    );
  }

  public getNews(e: Event, callback: LoadCallback<NewsDataType>) {
    let { target } = e;
    const newsContainer = e.currentTarget;

    while (target !== newsContainer) {
      if (!target) {
        throw new Error();
      }

      if (
        target instanceof HTMLElement &&
        newsContainer instanceof HTMLElement
      ) {
        if (target.classList.contains('source__item')) {
          const sourceId: string | null = target.getAttribute('data-source-id');

          if (
            newsContainer.getAttribute('data-source') !== sourceId &&
            sourceId !== null
          ) {
            newsContainer.setAttribute('data-source', sourceId);
            super.getResp(
              {
                endpoint: Endpoint.Everything,
                options: {
                  sources: sourceId,
                },
              },
              callback,
            );
          }
          return;
        }

        target = target.parentNode;
      }
    }
  }
}

export default AppController;
