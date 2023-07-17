import App from "./components/app/app";

import "./style.css";

async function runApp() {
  const bodyElement = document.querySelector("body");

  if (bodyElement) {
    const app = new App();
    const appElement = await app.render();
    bodyElement.append(appElement);
  }
}

runApp();
