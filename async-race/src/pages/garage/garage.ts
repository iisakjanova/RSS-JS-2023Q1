import createElement from "../../functionsHelpers";
import Car, { CarDataType } from "../../components/car/car";
import "./garage.css";

class Garage {
  page: HTMLDivElement;

  carsData: CarDataType[];

  cars: Car[];

  raceCompleted: boolean;

  winner: CarDataType | null;

  winnerMessage: HTMLElement;

  constructor(data: CarDataType[]) {
    this.page = document.createElement("div");
    this.carsData = data;
    this.cars = this.createCars();
    this.raceCompleted = false;
    this.winner = null;
    this.winnerMessage = createElement("div", "winner-message");
  }

  private createCars() {
    const cars = [];

    for (let i = 0; i < this.carsData.length; i += 1) {
      const car = new Car(this.carsData[i]);
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
          this.getWinner(id);
          this.showWinner();
        }
      }
    }

    this.raceCompleted = true;
  };

  private stopRace() {
    for (let i = 0; i < this.cars.length; i += 1) {
      this.cars[i].stopCarEngine();
    }

    const winnerMessage = document.querySelector(".winner-message");

    if (winnerMessage instanceof HTMLDivElement) {
      winnerMessage.innerText = "";
    }
  }

  private getWinner(id: number) {
    const winner = this.carsData.find((car) => car.id === id);

    if (winner) {
      this.winner = winner;
    }
  }

  private showWinner() {
    this.winnerMessage.innerText = `${this.winner?.name} won!`;
  }

  public render() {
    this.page.className = "garage-page";

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
    this.page.append(buttonsContainer, carsElement, this.winnerMessage);
    return this.page;
  }
}

export default Garage;
