import './letters.css';
import { LetterClickType } from '../../../types';
import { Alphabet } from '../../../constants';

interface ILetters {
  draw(onLetterClick: LetterClickType): void;
}

class Letters implements ILetters {
  public draw(onLetterClick: LetterClickType) {
    const alphabetContainer: Element | null = document.querySelector(
      '.letters',
    );

    if (!alphabetContainer) {
      throw new Error('.letters container not found');
    }

    const fragment: DocumentFragment = document.createDocumentFragment();
    const letterItemTemp: Element | null = document.querySelector(
      '#letterItemTemp',
    );

    if (!(letterItemTemp instanceof HTMLTemplateElement)) {
      throw new Error('#letterItemTemp template not found');
    }

    Object.values(Alphabet).forEach((letter) => {
      const letterClone = letterItemTemp.content.cloneNode(
        true,
      ) as DocumentFragment;

      const letterElement: Element | null = letterClone.querySelector(
        '.letter__item',
      );
      if (letterElement) {
        letterElement.addEventListener('click', () => onLetterClick(letter));
      }
      const letterTextElement: Element | null = letterClone.querySelector(
        '.letter__item-text',
      );

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
