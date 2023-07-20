import Garage from "../../pages/garage/garage";
import { getCars } from "../../api";
import Winners from "../../pages/winners/winners";

class App {
  container: HTMLDivElement;

  constructor() {
    this.container = document.createElement("div");
  }

  public async render() {
    this.container.className = "app-container";
    const garageData = await getCars();

    const garagePage = new Garage(garageData).render();
    const winnersPage = new Winners().render();

    if (this.container) {
      this.container.append(garagePage, winnersPage);
    }

    return this.container;
  }
}

export default App;
