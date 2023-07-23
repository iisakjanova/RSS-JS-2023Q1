import "./car.css";
import car from "./carImage";
import flag from "../../../assets/flag.svg";
import createElement from "../../functionsHelpers";
import {
  removeCar,
  removeWinner,
  setDriveMode,
  startEngine,
  stopEngine,
} from "../../api";
import { CAR_LEFT_POSITION, STOP } from "../../constants";

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

  carRaceTime: string;

  engineStartButtonElement: HTMLElement;

  engineStopButtonElement: HTMLElement;

  onChangeCars: () => void;

  constructor(data: CarDataType, onChangeCars: () => void) {
    this.name = data.name;
    this.color = data.color;
    this.id = data.id;
    this.carBlockElement = document.createElement("div");
    this.velocity = 0;
    this.distance = 0;
    this.carRaceTime = "0";
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
    this.onChangeCars = onChangeCars;
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
      this.carRaceTime = animationDuration;
    }

    const driveModeResponse = await setDriveMode(this.id);

    if (driveModeResponse === STOP) {
      this.stopCarEngine(true);
    }
  }

  public async stopCarEngine(status: boolean = false) {
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
      if (status) {
        const computedStyle = getComputedStyle(target);
        target.style.left = computedStyle.getPropertyValue("left");
      }

      target.classList.remove("animation");
    }
  }

  public resetCarPosition() {
    const carElement = this.carBlockElement.querySelector(".car-image");

    if (carElement instanceof HTMLDivElement) {
      carElement.style.left = CAR_LEFT_POSITION;
    }
  }

  createCarBlockHeaderElement(name: string) {
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
    carRemoveButtonElement.addEventListener("click", this.handleRemoveCar);

    const carNameElement = createElement("span", "car-name", name);
    carBlockHeaderElement.append(
      carSelectButtonElement,
      carRemoveButtonElement,
      carNameElement
    );

    return carBlockHeaderElement;
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

  handleRemoveCar = async () => {
    await removeCar(this.id);
    await removeWinner(this.id);
    this.onChangeCars();
  };

  public render() {
    this.carBlockElement.className = "car-block";
    const carBlockHeaderElement = this.createCarBlockHeaderElement(this.name);
    const trackElement = this.createTrackElement(this.color, this.id);
    this.carBlockElement.append(carBlockHeaderElement, trackElement);

    return this.carBlockElement;
  }
}

export default Car;
