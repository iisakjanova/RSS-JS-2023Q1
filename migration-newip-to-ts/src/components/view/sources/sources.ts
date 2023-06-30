import './sources.css';
import { SourcesDataType } from '../../../types';

interface ISources {
  draw(data: SourcesDataType[], letter?: string): void;
}

class Sources implements ISources {
  public draw(data: SourcesDataType[], letter: string) {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement | null = document.querySelector(
      '#sourceItemTemp',
    );

    data
      .filter((item) => {
        if (!letter) {
          return true;
        }
        return item.name.startsWith(letter.toUpperCase());
      })
      .forEach((item: SourcesDataType) => {
        const sourceClone: Node | undefined = sourceItemTemp?.content.cloneNode(
          true,
        );

        if (!(sourceClone instanceof DocumentFragment)) {
          throw new Error();
        }

        const itemNameElement: HTMLElement | null = sourceClone.querySelector(
          '.source__item-name',
        );

        if (itemNameElement) {
          itemNameElement.textContent = item.name;
        }

        const itemElement: HTMLElement | null = sourceClone.querySelector(
          '.source__item',
        );

        if (itemElement) {
          itemElement.setAttribute('data-source-id', item.id);
        }

        fragment.append(sourceClone);
      });

    const sourcesContainer: HTMLElement | null = document.querySelector(
      '.sources',
    );

    if (sourcesContainer instanceof HTMLElement) {
      sourcesContainer.innerHTML = '';
      sourcesContainer.append(fragment);
    }
  }
}

export default Sources;
