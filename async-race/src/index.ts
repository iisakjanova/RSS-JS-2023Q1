import App from "./components/app/app";

import "./style.css";

const bodyElement = document.querySelector("body");

if (bodyElement) {
  const app: App = new App();
  const appElement = app.render();
  bodyElement.append(appElement);
}
