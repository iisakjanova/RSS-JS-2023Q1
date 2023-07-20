import createElement from "../../functionsHelpers";
import car from "../../components/car/carImage";
import "./winners.css";

const createWinnersTableHeader = () => {
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

type FullWinnerData = {
  id: number;
  wins: number;
  time: number;
  color: string;
  name: string;
};

class Winners {
  page: HTMLElement;

  winners: FullWinnerData[];

  constructor(data: FullWinnerData[]) {
    this.page = createElement("div", "winners-page");
    this.winners = data;
  }

  private createWinnersTableRows() {
    const winnersRowsElement = createElement("div", "winners-table-rows");

    for (let i = 0; i < this.winners.length; i += 1) {
      const number = createElement("span", "", `${i + 1}`);
      const carImg = createElement("span", "car-img", `${car}`);
      carImg.style.fill = `${this.winners[i].color}`;
      const name = createElement("span", "", `${this.winners[i].name}`);
      const wins = createElement("span", "", `${this.winners[i].wins}`);
      const time = createElement("span", "", `${this.winners[i].time}`);

      const winnerRowElement = createElement("div", "winners-table-row");
      winnerRowElement.append(number, carImg, name, wins, time);
      winnersRowsElement.append(winnerRowElement);
    }

    return winnersRowsElement;
  }

  private createWinnersTableElement() {
    const winnersElement = createElement("div", "winners");
    const winnersHeaderElement = createWinnersTableHeader();
    const winnersRowsElement = this.createWinnersTableRows();
    winnersElement.append(winnersHeaderElement, winnersRowsElement);

    return winnersElement;
  }

  public render() {
    const winnersElement = this.createWinnersTableElement();
    this.page.append(winnersElement);
    return this.page;
  }
}

export default Winners;
