import Garage from "../../pages/garage/garage";

class App {
  container: HTMLDivElement;

  constructor() {
    this.container = document.createElement("div");
  }

  private static async getCars() {
    try {
      const response = await fetch("http://localhost:3000/garage/");

      if (!response.ok) {
        throw new Error("Something went wrong...");
      }

      return await response.json();
    } catch (error: Error | unknown) {
      if (error instanceof Error) {
        // Handle the specific error
        console.error("Error:", error.message);
      } else {
        // Handle other unknown errors
        console.error("Unknown error:", error);
      }

      return null;
    }
  }

  public async render() {
    this.container.className = "app-container";
    const garageData = await App.getCars();

    const garagePage = new Garage(garageData).render();

    if (this.container) {
      this.container.append(garagePage);
    }

    return this.container;
  }
}

export default App;
