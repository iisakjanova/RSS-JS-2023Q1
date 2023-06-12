import './letters.css';
import Sources, { SourcesDataType } from '../sources/sources';

enum Alphabet {
  A = 'A',
  B = 'B',
  C = 'C',
}

class Letters {
  draw(sourcesData?: SourcesDataType[]) {
    const alphabetContainer = document.querySelector('.letters');

    if (!alphabetContainer) {
      throw new Error('.letters container not found');
    }

    const fragment = document.createDocumentFragment();
    const letterItemTemp = document.querySelector('#letterItemTemp');

    if (!(letterItemTemp instanceof HTMLTemplateElement)) {
      throw new Error('#letterItemTemp template not found');
    }

    Object.values(Alphabet).forEach((letter) => {
      const letterClone = letterItemTemp.content.cloneNode(
        true,
      ) as DocumentFragment;

      const letterElement = letterClone.querySelector('.letter__item');
      if (letterElement) {
        letterElement.addEventListener('click', () => {
          if (sourcesData) {
            const sources = new Sources();
            sources.filterByAlphabet(letter, sourcesData);
          }
        });
      }
      const letterTextElement = letterClone.querySelector('.letter__item-text');

      if (letterTextElement) {
        letterTextElement.textContent = letter;
      }

      fragment.append(letterClone);
    });

    alphabetContainer.innerHTML = '';
    alphabetContainer.append(fragment);
  }
}

export default Letters;
