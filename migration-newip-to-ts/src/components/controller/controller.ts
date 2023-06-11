import AppLoader from './appLoader';

type CallbackType = () => void;

class AppController extends AppLoader {
  public getSources(callback: CallbackType) {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback,
    );
  }

  public getNews(e: Event, callback: CallbackType) {
    let { target }: { target: EventTarget | null } = e;
    const newsContainer: EventTarget | null = e.currentTarget;

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
                endpoint: 'everything',
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
