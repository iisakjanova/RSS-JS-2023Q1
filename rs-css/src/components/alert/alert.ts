import "./alert.css";

class Alert {
  alertBox: HTMLDivElement;

  messageElement: HTMLSpanElement;

  closeButton: HTMLButtonElement;

  constructor() {
    this.alertBox = document.createElement("div");
    this.messageElement = document.createElement("span");
    this.closeButton = document.createElement("button");
  }

  public showAlert(message: string) {
    this.messageElement.textContent = message;
    this.alertBox.style.display = "block";
    this.closeButton.addEventListener("click", () => this.hideAlert());
  }

  public hideAlert() {
    this.alertBox.style.display = "none";
  }

  public render() {
    this.alertBox.id = "custom-alert";
    this.alertBox.classList.add("custom-alert");

    const alertContent = document.createElement("div");
    alertContent.classList.add("custom-alert-content");

    this.messageElement.id = "custom-alert-message";
    this.messageElement.classList.add("custom-alert-message");

    this.closeButton.id = "custom-alert-button";
    this.closeButton.classList.add("custom-alert-button");
    this.closeButton.type = "button";
    this.closeButton.innerText = "OK";

    alertContent.appendChild(this.messageElement);
    alertContent.appendChild(this.closeButton);

    this.alertBox.appendChild(alertContent);

    return this.alertBox;
  }
}

export default Alert;
