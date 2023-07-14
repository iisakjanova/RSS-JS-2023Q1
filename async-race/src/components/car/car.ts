import "./car.css";
import car from "./carImage";
import flag from "../../../assets/flag.svg";

type CarDataType = {
  name: string;
  color: string;
  id: number;
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

  private static createElement(tag: string, className: string, content = "") {
    const element = document.createElement(`${tag}`);
    element.className = `${className}`;

    if (content) {
      element.innerHTML = `${content}`;
    }
    return element;
  }

  private static createCarBlockHeaderElement(name: string) {
    const carBlockHeaderElement = Car.createElement("div", "car-block-header");
    const carSelectButtonElement = Car.createElement(
      "button",
      "car-button",
      "select"
    );
    const carRemoveButtonElement = Car.createElement(
      "button",
      "car-button",
      "remove"
    );
    const carNameElement = Car.createElement("span", "car-name", name);
    carBlockHeaderElement.append(
      carSelectButtonElement,
      carRemoveButtonElement,
      carNameElement
    );

    return carBlockHeaderElement;
  }

  private static createTrackElement(color: string) {
    const trackElement = Car.createElement("div", "track");

    const carElement = Car.createElement("div", "car");
    const engineStartButtonElement = Car.createElement(
      "button",
      "engine-button",
      "A"
    );
    const engineStopButtonElement = Car.createElement(
      "button",
      "engine-button",
      "B"
    );
    const carImageElement = Car.createElement("div", "car-image", car);
    carImageElement.style.fill = color;
    carElement.append(
      engineStartButtonElement,
      engineStopButtonElement,
      carImageElement
    );

    const flagElement = Car.createElement("img", "flag");

    if (flagElement instanceof HTMLImageElement) {
      flagElement.src = flag;
    }

    trackElement.append(carElement, flagElement);

    return trackElement;
  }

  public render() {
    this.carBlockElement.className = "car-block";
    const carBlockHeaderElement = Car.createCarBlockHeaderElement(this.name);
    const trackElement = Car.createTrackElement(this.color);
    this.carBlockElement.append(carBlockHeaderElement, trackElement);
    return this.carBlockElement;
  }
}

export default Car;
