interface CssEditor {
  render(): HTMLDivElement;
}

class CssEditor {
  cssEditor: HTMLDivElement;

  constructor() {
    this.cssEditor = document.createElement("div");
  }

  public render() {
    this.cssEditor.className = "css-editor";

    const lineNumbers = document.createElement("ul");
    lineNumbers.className = "line-numbers";

    for (let i = 1; i <= 20; i += 1) {
      const lineNumbersItem = document.createElement("li");

      lineNumbersItem.className = "line-numbers-item";
      lineNumbersItem.innerText = i.toString();
      lineNumbers.append(lineNumbersItem);
    }

    this.cssEditor.append(lineNumbers);

    const editorInputFormElement = document.createElement("form");
    editorInputFormElement.className = "editor-input-form";

    this.cssEditor.append(editorInputFormElement);

    const editorInputElement = document.createElement("input");
    editorInputElement.type = "text";
    editorInputElement.className = "editor-input";
    editorInputElement.placeholder = "type in a css selector";

    const buttonElement = document.createElement("button");
    buttonElement.type = "button";
    buttonElement.innerText = "enter";

    editorInputFormElement.append(editorInputElement);
    editorInputFormElement.append(buttonElement);

    return this.cssEditor;
  }
}

export default CssEditor;
