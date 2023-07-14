import Car from "../car/car";

const carData = {
  name: "Tesla",
  color: "#e6e6fa",
  id: 1,
};

class App {
  container: HTMLDivElement;

  constructor() {
    this.container = document.createElement("div");
  }

  public render() {
    this.container.className = "app-container";

    const carElement = new Car(carData);

    if (this.container) {
      this.container.append(carElement.render());
    }

    return this.container;
  }
}

export default App;
