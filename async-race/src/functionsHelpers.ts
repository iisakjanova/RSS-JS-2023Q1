export function createElement(tag: string, className: string, content = "") {
  const element = document.createElement(`${tag}`);
  element.className = `${className}`;

  if (content) {
    element.innerHTML = `${content}`;
  }
  return element;
}

export const createWinnersTableHeader = () => {
  const numbersElement = createElement("span", "", `Number`);
  const carsElement = createElement("span", "", `Cars`);
  const namesElement = createElement("span", "", `Name`);
  const winsElement = createElement("span", "", `Wins`);
  const timeElement = createElement("span", "", `Best time(sec)`);

  const winnersHeaderElement = createElement("div", "winners-table-row");
  winnersHeaderElement.append(
    numbersElement,
    carsElement,
    namesElement,
    winsElement,
    timeElement
  );

  return winnersHeaderElement;
};
