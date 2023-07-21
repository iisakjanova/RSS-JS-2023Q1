import Garage from "../../pages/garage/garage";
import { WinnerData, getCars, getWinners } from "../../api";
import Winners from "../../pages/winners/winners";
import { CarDataType } from "../car/car";
import createElement from "../../functionsHelpers";

import "./app.css";

class App {
  container: HTMLDivElement;

  winnersData: WinnerData[];

  garageData: CarDataType[];

  constructor() {
    this.container = document.createElement("div");
    this.winnersData = [];
    this.garageData = [];
  }

  createWinnersPageData() {
    const winnersPageData = this.winnersData.map((winner: WinnerData) => {
      const matchingCar = this.garageData.find(
        (car: CarDataType) => car.id === winner.id
      );

      if (matchingCar) {
        return {
          name: matchingCar.name,
          color: matchingCar.color,
          id: matchingCar.id,
          wins: winner.wins,
          time: winner.time,
        };
      }

      return {
        name: "Unknown Car",
        color: "white",
        id: winner.id,
        wins: winner.wins,
        time: winner.time,
      };
    });

    return winnersPageData;
  }

  private handleClickToGarageButton = () => {
    const winnersPage = this.container.querySelector(".winners-page");

    if (winnersPage) {
      this.container.removeChild(winnersPage);
    }

    const garagePage = new Garage(this.garageData).render();
    this.container.appendChild(garagePage);
  };

  private handleClickToWinnersButton = () => {
    const winnersPageData = this.createWinnersPageData();
    const garagePage = this.container.querySelector(".garage-page");

    if (garagePage) {
      this.container.removeChild(garagePage);
    }

    const winnersPage = new Winners(winnersPageData).render();
    this.container.appendChild(winnersPage);
  };

  public async render() {
    this.container.className = "app-container";
    this.winnersData = await getWinners();
    this.garageData = await getCars();
    const winnersPageData = this.createWinnersPageData();

    const navigationBlockElement = createElement("div", "navigation");

    const toGarageBtn = createElement("button", "nav-btn", "to garage");
    toGarageBtn.addEventListener("click", this.handleClickToGarageButton);

    const toWinnersBtn = createElement("button", "nav-btn", "to winners");
    toWinnersBtn.addEventListener("click", this.handleClickToWinnersButton);

    navigationBlockElement.append(toGarageBtn, toWinnersBtn);

    const winnersPage = new Winners(winnersPageData).render();

    if (this.container) {
      this.container.append(navigationBlockElement, winnersPage);
    }

    return this.container;
  }
}

export default App;
