import EditorViewerHeader from "../editor-viewer-header/editor-viewer-header";

interface CssEditorInterface {
  render(): HTMLDivElement;
}

class CssEditor implements CssEditorInterface {
  cssEditorBlock: HTMLDivElement;

  constructor() {
    this.cssEditorBlock = document.createElement("div");
  }

  public render() {
    this.cssEditorBlock.className = "css-editor-block";

    const header = new EditorViewerHeader("CSS Editor", "style.css").render();
    this.cssEditorBlock.append(header);

    const cssEditor = document.createElement("div");
    cssEditor.className = "css-editor";

    this.cssEditorBlock.append(cssEditor);

    const lineNumbers = document.createElement("ul");
    lineNumbers.className = "line-numbers";

    for (let i = 1; i <= 20; i += 1) {
      const lineNumbersItem = document.createElement("li");

      lineNumbersItem.className = "line-numbers-item";
      lineNumbersItem.innerText = i.toString();
      lineNumbers.append(lineNumbersItem);
    }

    cssEditor.append(lineNumbers);

    const editorInputFormElement = document.createElement("form");
    editorInputFormElement.className = "editor-input-form";

    cssEditor.append(editorInputFormElement);

    const editorInputElement = document.createElement("input");
    editorInputElement.type = "text";
    editorInputElement.className = "editor-input";
    editorInputElement.placeholder = "type in a css selector";

    const buttonElement = document.createElement("button");
    buttonElement.type = "button";
    buttonElement.innerText = "enter";

    editorInputFormElement.append(editorInputElement);
    editorInputFormElement.append(buttonElement);

    return this.cssEditorBlock;
  }
}

export default CssEditor;
