import "./car.css";
import car from "./carImage";
import flag from "../../../assets/flag.svg";
import createElement from "../../functionsHelpers";

export type CarDataType = {
  name: string;
  color: string;
  id: number;
};

const driveCar = {
  velocity: 64,
  distance: 500000,
};

class Car {
  name: string;

  color: string;

  id: number;

  carBlockElement: HTMLDivElement;

  constructor(data: CarDataType) {
    this.name = data.name;
    this.color = data.color;
    this.id = data.id;
    this.carBlockElement = document.createElement("div");
  }

  private static startCarEngine(id: number) {
    const target = document.querySelector(`[data-id="${id}"]`);

    if (target instanceof HTMLElement) {
      target.classList.add("animation");
      const animationDuration = Math.round(
        driveCar.distance / driveCar.velocity
      ).toString();
      target.style.animationDuration = `${animationDuration}ms`;
    }
  }

  private static stopCarEngine(id: number) {
    const target = document.querySelector(`[data-id="${id}"]`);

    if (target instanceof HTMLElement) {
      target.classList.remove("animation");
    }
  }

  private static createCarBlockHeaderElement(name: string) {
    const carBlockHeaderElement = createElement("div", "car-block-header");
    const carSelectButtonElement = createElement(
      "button",
      "car-button",
      "select"
    );
    const carRemoveButtonElement = createElement(
      "button",
      "car-button",
      "remove"
    );
    const carNameElement = createElement("span", "car-name", name);
    carBlockHeaderElement.append(
      carSelectButtonElement,
      carRemoveButtonElement,
      carNameElement
    );

    return carBlockHeaderElement;
  }

  private static createTrackElement(color: string, id: number) {
    const trackElement = createElement("div", "track");

    const carElement = createElement("div", "car");
    const engineStartButtonElement = createElement(
      "button",
      "engine-button",
      "A"
    );
    const engineStopButtonElement = createElement(
      "button",
      "engine-button",
      "B"
    );
    const carImageElement = createElement("div", "car-image", car);
    carImageElement.setAttribute("data-id", `${id}`);
    carImageElement.style.fill = color;
    carElement.append(
      engineStartButtonElement,
      engineStopButtonElement,
      carImageElement
    );

    const flagElement = createElement("img", "flag");

    if (flagElement instanceof HTMLImageElement) {
      flagElement.src = flag;
    }

    trackElement.append(carElement, flagElement);

    engineStartButtonElement.addEventListener("click", () => {
      this.startCarEngine(id);
    });

    engineStopButtonElement.addEventListener("click", () => {
      this.stopCarEngine(id);
    });

    return trackElement;
  }

  public render() {
    this.carBlockElement.className = "car-block";
    const carBlockHeaderElement = Car.createCarBlockHeaderElement(this.name);
    const trackElement = Car.createTrackElement(this.color, this.id);
    this.carBlockElement.append(carBlockHeaderElement, trackElement);

    return this.carBlockElement;
  }
}

export default Car;
