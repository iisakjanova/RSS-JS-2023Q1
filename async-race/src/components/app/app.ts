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

  toGarageBtn: HTMLButtonElement | null;

  toWinnersBtn: HTMLButtonElement | null;

  garage: Garage | null;

  constructor() {
    this.container = document.createElement("div");
    this.winnersData = [];
    this.garageData = [];
    this.toGarageBtn = null;
    this.toWinnersBtn = null;
    this.garage = null;
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

    const garagePage = new Garage(this.garageData, this.onChangeCars).render();
    this.container.appendChild(garagePage);

    if (this.toGarageBtn && this.toWinnersBtn) {
      this.toGarageBtn.disabled = true;
      this.toWinnersBtn.disabled = false;
    }
  };

  private handleClickToWinnersButton = () => {
    const winnersPageData = this.createWinnersPageData();
    const garagePage = this.container.querySelector(".garage-page");

    if (garagePage) {
      this.container.removeChild(garagePage);
    }

    const winnersPage = new Winners(winnersPageData).render();
    this.container.appendChild(winnersPage);

    if (this.toGarageBtn && this.toWinnersBtn) {
      this.toGarageBtn.disabled = false;
      this.toWinnersBtn.disabled = true;
    }
  };

  private createNavigation() {
    const navigationBlockElement = createElement("div", "navigation");

    const toGarageBtn = createElement("button", "nav-btn", "to garage");

    if (toGarageBtn instanceof HTMLButtonElement) {
      this.toGarageBtn = toGarageBtn;
      this.toGarageBtn.addEventListener(
        "click",
        this.handleClickToGarageButton
      );

      navigationBlockElement.append(this.toGarageBtn);
    }

    const toWinnersBtn = createElement("button", "nav-btn", "to winners");

    if (toWinnersBtn instanceof HTMLButtonElement) {
      this.toWinnersBtn = toWinnersBtn;
      this.toWinnersBtn.addEventListener(
        "click",
        this.handleClickToWinnersButton
      );

      navigationBlockElement.append(this.toWinnersBtn);
    }

    return navigationBlockElement;
  }

  public async onChangeCars() {
    this.garageData = await getCars();

    if (this.garage) {
      this.garage.setCarsData(this.garageData);
      this.garage.rerenderCars();
    }
  }

  public async render() {
    this.container.className = "app-container";
    this.winnersData = await getWinners();
    this.garageData = await getCars();

    const navigationBlockElement = this.createNavigation();

    this.garage = new Garage(this.garageData, this.onChangeCars.bind(this));
    const garagePage = this.garage.render();

    if (this.toGarageBtn) {
      this.toGarageBtn.disabled = true;
    }

    if (this.container) {
      this.container.append(navigationBlockElement, garagePage);
    }

    return this.container;
  }
}

export default App;
