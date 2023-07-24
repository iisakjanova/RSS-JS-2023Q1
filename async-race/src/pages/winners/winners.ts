import {
  createElement,
  createWinnersTableHeader,
} from "../../functionsHelpers";
import car from "../../components/car/carImage";
import { FullWinnerData } from "../../types";
import "./winners.css";

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
    const title = createElement(
      "h2",
      "title",
      `Winners (${this.winners.length})`
    );
    const winnersElement = this.createWinnersTableElement();
    this.page.append(title, winnersElement);
    return this.page;
  }
}

export default Winners;
