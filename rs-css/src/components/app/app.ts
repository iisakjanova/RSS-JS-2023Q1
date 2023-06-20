import CssEditor from "../css-editor/css-editor";

interface App {
  render(): void;
}

class App {
  cssEditor: CssEditor;

  container: HTMLElement | null;

  constructor() {
    this.cssEditor = new CssEditor();
    this.container = document.getElementById("app-container");
  }

  render() {
    const cssEditorElement = this.cssEditor.render();
    if (this.container) {
      this.container.append(cssEditorElement);
    }
  }
}

export default App;
