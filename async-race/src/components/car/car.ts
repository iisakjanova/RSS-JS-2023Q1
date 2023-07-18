import "./car.css";
import car from "./carImage";
import flag from "../../../assets/flag.svg";
import createElement from "../../functionsHelpers";
import { setDriveMode, startEngine, stopEngine } from "../../api";
import { STOP } from "../../constants";

const createCarBlockHeaderElement = (name: string) => {
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
};

export type CarDataType = {
  name: string;
  color: string;
  id: number;
};

class Car {
  name: string;

  color: string;

  id: number;

  carBlockElement: HTMLDivElement;

  velocity: number;

  distance: number;

  engineStartButtonElement: HTMLElement;

  engineStopButtonElement: HTMLElement;

  constructor(data: CarDataType) {
    this.name = data.name;
    this.color = data.color;
    this.id = data.id;
    this.carBlockElement = document.createElement("div");
    this.velocity = 0;
    this.distance = 0;
    this.engineStartButtonElement = createElement(
      "button",
      "engine-button",
      "A"
    );
    this.engineStopButtonElement = createElement(
      "button",
      "engine-button",
      "B"
    );
  }

  public async startCarEngine() {
    if (
      this.engineStartButtonElement instanceof HTMLButtonElement &&
      this.engineStopButtonElement instanceof HTMLButtonElement
    ) {
      this.engineStartButtonElement.disabled = true;
      this.engineStopButtonElement.disabled = false;
    }

    const response = await startEngine(this.id);
    this.velocity = response.velocity;
    this.distance = response.distance;
    const target = document.querySelector(`[data-id="${this.id}"]`);

    if (target instanceof HTMLElement) {
      target.classList.add("animation");
      const animationDuration = Math.round(
        this.distance / this.velocity
      ).toString();
      target.style.animationDuration = `${animationDuration}ms`;
    }

    const driveModeResponse = await setDriveMode(this.id);

    if (driveModeResponse === STOP) {
      this.stopCarEngine();
    }
  }

  public async stopCarEngine() {
    if (
      this.engineStartButtonElement instanceof HTMLButtonElement &&
      this.engineStopButtonElement instanceof HTMLButtonElement
    ) {
      this.engineStartButtonElement.disabled = false;
      this.engineStopButtonElement.disabled = true;
    }

    await stopEngine(this.id);
    const target = document.querySelector(`[data-id="${this.id}"]`);

    if (target instanceof HTMLElement) {
      target.classList.remove("animation");
    }
  }

  private createTrackElement(color: string, id: number) {
    const trackElement = createElement("div", "track");

    const carElement = createElement("div", "car");

    const carImageElement = createElement("div", "car-image", car);
    carImageElement.setAttribute("data-id", `${id}`);
    carImageElement.style.fill = color;
    carElement.append(
      this.engineStartButtonElement,
      this.engineStopButtonElement,
      carImageElement
    );

    if (this.engineStopButtonElement instanceof HTMLButtonElement) {
      this.engineStopButtonElement.disabled = true;
    }

    const flagElement = createElement("img", "flag");

    if (flagElement instanceof HTMLImageElement) {
      flagElement.src = flag;
    }

    trackElement.append(carElement, flagElement);

    this.engineStartButtonElement.addEventListener("click", () => {
      this.startCarEngine();
    });

    this.engineStopButtonElement.addEventListener("click", () => {
      this.stopCarEngine();
    });

    return trackElement;
  }

  public render() {
    this.carBlockElement.className = "car-block";
    const carBlockHeaderElement = createCarBlockHeaderElement(this.name);
    const trackElement = this.createTrackElement(this.color, this.id);
    this.carBlockElement.append(carBlockHeaderElement, trackElement);

    return this.carBlockElement;
  }
}

export default Car;
