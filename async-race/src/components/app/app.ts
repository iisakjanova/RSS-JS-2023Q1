import Garage from "../../pages/garage/garage";
import { WinnerData, getCars, getWinners } from "../../api";
import Winners from "../../pages/winners/winners";
import { CarDataType } from "../car/car";

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

  public async render() {
    this.container.className = "app-container";
    this.winnersData = await getWinners();
    this.garageData = await getCars();
    const winnersPageData = this.createWinnersPageData();

    const garagePage = new Garage(this.garageData).render();

    const winnersPage = new Winners(winnersPageData).render();

    if (this.container) {
      this.container.append(garagePage, winnersPage);
    }

    return this.container;
  }
}

export default App;
