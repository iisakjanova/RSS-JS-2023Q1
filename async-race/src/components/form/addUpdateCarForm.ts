import { createCar } from "../../api";
import createElement from "../../functionsHelpers";

class AddUpdateCarForm {
  formElement: HTMLElement;

  btnText: string;

  input: HTMLElement | null;

  colorInput: HTMLElement | null;

  constructor(btnText: string) {
    this.formElement = createElement("form", "form");
    this.btnText = btnText;
    this.input = null;
    this.colorInput = null;
  }

  private createInputElement() {
    const inputBlockElement = createElement("div", "input-wrapper");

    this.input = createElement("input", "car-input");
    this.colorInput = createElement("input", "");

    if (this.colorInput instanceof HTMLInputElement) {
      this.colorInput.type = "color";
    }

    const btnElement = createElement("button", "btn", `${this.btnText}`);
    inputBlockElement.append(this.input, this.colorInput, btnElement);
    return inputBlockElement;
  }

  public handleFormSubmit() {
    if (
      this.input instanceof HTMLInputElement &&
      this.colorInput instanceof HTMLInputElement
    ) {
      const car = { name: this.input.value, color: this.colorInput.value };
      createCar(car);
      this.input.value = "";
      this.colorInput.value = "";
    }
  }

  public render() {
    this.formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleFormSubmit();
    });
    const inputBlock = this.createInputElement();
    this.formElement.append(inputBlock);
    return this.formElement;
  }
}

export default AddUpdateCarForm;
