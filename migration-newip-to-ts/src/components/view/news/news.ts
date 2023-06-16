import './news.css';
import { NewsDataType } from '../../../types';

interface INews {
  draw(data: NewsDataType[]): void;
}

class News implements INews {
  public draw(data: NewsDataType[]) {
    const news =
      data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp: HTMLTemplateElement | null = document.querySelector(
      '#newsItemTemp',
    );

    news.forEach((item, idx) => {
      const newsClone: Node | undefined = newsItemTemp?.content.cloneNode(true);

      if (!(newsClone instanceof DocumentFragment)) {
        throw new Error();
      }

      if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

      const metaPhotoElement: HTMLDivElement | null = newsClone.querySelector(
        '.news__meta-photo',
      );

      if (metaPhotoElement) {
        metaPhotoElement.style.backgroundImage = `url(${
          item.urlToImage ?? 'img/news_placeholder.jpg'
        })`;
      }

      const metaAuthorElement: HTMLLIElement | null = newsClone.querySelector(
        '.news__meta-author',
      );

      if (metaAuthorElement) {
        metaAuthorElement.textContent = item.author || item.source.name;
      }

      const metaDateElement: HTMLLIElement | null = newsClone.querySelector(
        '.news__meta-date',
      );

      if (metaDateElement) {
        metaDateElement.textContent = item.publishedAt
          .slice(0, 10)
          .split('-')
          .reverse()
          .join('-');
      }

      const descriptionTitleElement: HTMLHeadingElement | null = newsClone.querySelector(
        '.news__description-title',
      );

      if (descriptionTitleElement) {
        descriptionTitleElement.textContent = item.title;
      }

      const descriptionSourceElement: HTMLHeadingElement | null = newsClone.querySelector(
        '.news__description-source',
      );

      if (descriptionSourceElement) {
        descriptionSourceElement.textContent = item.source.name;
      }

      const descriptionContentElement: HTMLParagraphElement | null = newsClone.querySelector(
        '.news__description-content',
      );

      if (descriptionContentElement) {
        descriptionContentElement.textContent = item.description;
      }

      const readMoreLink: HTMLAnchorElement | null = newsClone.querySelector(
        '.news__read-more a',
      );

      if (readMoreLink) {
        readMoreLink.setAttribute('href', item.url);
      }

      fragment.append(newsClone);
    });

    const newsContainer: HTMLDivElement | null = document.querySelector(
      '.news',
    );

    if (newsContainer instanceof HTMLDivElement) {
      newsContainer.innerHTML = '';
      newsContainer.appendChild(fragment);
    }
  }
}

export default News;
