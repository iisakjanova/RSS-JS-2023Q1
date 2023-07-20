import createElement from "../../functionsHelpers";
import "./winners.css";

class Winners {
  page: HTMLElement;

  constructor() {
    this.page = createElement("div", "winners-page");
  }

  public render() {
    const winnersElement = createElement("div", "winners");
    const numbersColElement = createElement("div", "numbers");
    const carsColElement = createElement("div", "cars");
    const namesColElement = createElement("div", "names");
    const winsColElement = createElement("div", "wins");
    const timeColElement = createElement("div", "time");

    winnersElement.append(
      numbersColElement,
      carsColElement,
      namesColElement,
      winsColElement,
      timeColElement
    );
    this.page.append(winnersElement);
    return this.page;
  }
}

export default Winners;
