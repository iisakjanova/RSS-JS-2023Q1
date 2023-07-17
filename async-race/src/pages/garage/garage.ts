import createElement from "../../functionsHelpers";
import Car, { CarDataType } from "../../components/car/car";

class Garage {
  page: HTMLDivElement;

  cars: CarDataType[];

  constructor(data: CarDataType[]) {
    this.page = document.createElement("div");
    this.cars = data;
  }

  private createCarsElement() {
    const carsElement = createElement("div", "cars");

    for (let i = 0; i < this.cars.length; i += 1) {
      const car = new Car(this.cars[i]).render();
      carsElement.append(car);
    }

    return carsElement;
  }

  public render() {
    this.page.className = "garage-page";
    const carsElement = this.createCarsElement();
    this.page.append(carsElement);
    return this.page;
  }
}

export default Garage;
