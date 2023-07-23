import { createCar } from "../../api";
import createElement from "../../functionsHelpers";
import "./addUpdateCarForm.css";

class AddUpdateCarForm {
  formElement: HTMLElement;

  btnText: string;

  input: HTMLElement | null;

  colorInput: HTMLElement | null;

  onChangeCars: () => void;

  constructor(btnText: string, onChangeCars: () => void) {
    this.formElement = createElement("form", "form");
    this.btnText = btnText;
    this.onChangeCars = onChangeCars;
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

  public async handleFormSubmit() {
    if (
      this.input instanceof HTMLInputElement &&
      this.colorInput instanceof HTMLInputElement
    ) {
      const car = { name: this.input.value, color: this.colorInput.value };
      await createCar(car);
      this.input.value = "";
    }
    this.onChangeCars();
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
