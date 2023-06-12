import './sources.css';

export type SourcesDataType = {
  id: string;
  name: string;
};

class Sources {
  draw(data: SourcesDataType[]) {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement | null = document.querySelector(
      '#sourceItemTemp',
    );

    data.forEach((item: SourcesDataType) => {
      const sourceClone: Node | undefined = sourceItemTemp?.content.cloneNode(
        true,
      );

      if (!(sourceClone instanceof DocumentFragment)) {
        throw new Error();
      }

      const itemNameElement: HTMLElement | null = sourceClone.querySelector(
        '.source__item-name',
      );

      console.log(itemNameElement);

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

  filterByAlphabet(letter: string, data: SourcesDataType[]) {
    const filteredData = data.filter((item) =>
      item.name.startsWith(letter.toUpperCase()),
    );
    this.draw(filteredData);
  }
}

export default Sources;
