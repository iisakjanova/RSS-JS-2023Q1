import createElement from "../../functionsHelpers";
import Car, { CarDataType } from "../../components/car/car";
import "./garage.css";
import { WinnerData, createWinner, getWinner, updateWinner } from "../../api";
import AddUpdateCarForm from "../../components/form/addUpdateCarForm";

class Garage {
  page: HTMLDivElement;

  carsData: CarDataType[];

  cars: Car[];

  raceCompleted: boolean;

  winnerMessage: HTMLElement;

  onChangeCars: () => void;

  constructor(data: CarDataType[], onChangeCars: () => void) {
    this.page = document.createElement("div");
    this.carsData = data;
    this.onChangeCars = onChangeCars;
    this.cars = this.createCars();
    this.raceCompleted = true;
    this.winnerMessage = createElement("div", "winner-message");
  }

  private createCars() {
    const cars = [];

    for (let i = 0; i < this.carsData.length; i += 1) {
      const car = new Car(this.carsData[i], this.onChangeCars.bind(this));
      cars.push(car);
    }

    return cars;
  }

  private createCarsElement() {
    const carsElement = createElement("div", "cars");

    for (let i = 0; i < this.cars.length; i += 1) {
      const carElement = this.cars[i].render();
      carsElement.append(carElement);
    }

    return carsElement;
  }

  private startRace() {
    this.raceCompleted = false;
    for (let i = 0; i < this.cars.length; i += 1) {
      this.cars[i].startCarEngine();
    }
  }

  public handleAnimationEnd = (event: Event) => {
    if (this.raceCompleted) {
      return;
    }

    if (event.target instanceof HTMLDivElement) {
      const carElement = event.target.closest(".car");

      if (carElement) {
        const carImageElement = carElement.querySelector(".car-image");

        if (carImageElement instanceof HTMLElement) {
          const id = Number(carImageElement.getAttribute("data-id"));
          this.showWinner(id);
          const winnerInstance = this.cars.filter((car) => car.id === id);
          const winnerTime = Number(winnerInstance[0].carRaceTime) / 1000;
          Garage.saveWinner(id, winnerTime);
        }
      }
    }

    this.raceCompleted = true;
  };

  private stopRace() {
    for (let i = 0; i < this.cars.length; i += 1) {
      this.cars[i].stopCarEngine();
      this.cars[i].resetCarPosition();
    }

    this.raceCompleted = true;
    const winnerMessage = document.querySelector(".winner-message");

    if (winnerMessage instanceof HTMLDivElement) {
      winnerMessage.innerText = "";
    }
  }

  private getWinnerName(id: number) {
    const winner = this.carsData.find((car) => car.id === id);

    if (winner) {
      return winner.name;
    }

    return "";
  }

  private showWinner(id: number) {
    const winnerName = this.getWinnerName(id);
    this.winnerMessage.innerText = `${winnerName} won!`;
  }

  private static async saveWinner(id: number, time: number) {
    const winner = {
      id,
      wins: 1,
      time,
    };

    const response: WinnerData = await getWinner(id);

    if (response) {
      winner.wins = response.wins + 1;
      winner.time = Math.min(response.time, winner.time);
      updateWinner(winner);
    } else {
      createWinner(winner);
    }
  }

  public setCarsData(data: CarDataType[]) {
    this.carsData = data;
  }

  public rerenderCars() {
    const oldCarsElement = this.page.querySelector(".cars");

    if (oldCarsElement) {
      this.page.removeChild(oldCarsElement);
      this.cars = this.createCars();
      const carsElement = this.createCarsElement();
      this.page.append(carsElement);
    }
  }

  public render() {
    this.page.className = "garage-page";

    const formElementAdd = new AddUpdateCarForm(
      "create",
      this.onChangeCars.bind(this)
    ).render();
    const formElementUpdate = new AddUpdateCarForm(
      "update",
      this.onChangeCars.bind(this)
    ).render();

    const buttonsContainer = createElement("div", "race-buttons");
    const raceButton = createElement("button", "race-button", "race");
    raceButton.addEventListener("click", () => {
      this.startRace();
    });
    const resetButton = createElement("button", "reset-button", "reset");
    resetButton.addEventListener("click", () => {
      this.stopRace();
    });
    buttonsContainer.append(raceButton, resetButton);

    const carsElement = this.createCarsElement();
    carsElement.addEventListener("animationend", this.handleAnimationEnd);
    this.page.append(
      formElementAdd,
      formElementUpdate,
      buttonsContainer,
      carsElement,
      this.winnerMessage
    );
    return this.page;
  }
}

export default Garage;
