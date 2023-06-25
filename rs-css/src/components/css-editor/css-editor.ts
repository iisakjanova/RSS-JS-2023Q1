import EditorViewerHeader from "../editor-viewer-header/editor-viewer-header";
import { CustomNodeType, LevelType, OnInputSubmitType } from "../../types";

import "./css-editor.css";

export interface CssEditorInterface {
  render(): HTMLDivElement;
}

class CssEditor implements CssEditorInterface {
  onInputSubmit: OnInputSubmitType;

  layoutCode: CustomNodeType;

  answer: string;

  cssEditorBlock: HTMLDivElement;

  inputValue: string;

  constructor(onInputSubmit: OnInputSubmitType, level: LevelType) {
    this.onInputSubmit = onInputSubmit;
    this.layoutCode = level.layoutCode;
    this.answer = level.answer;
    this.cssEditorBlock = document.createElement("div");
    this.inputValue = "";
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

    editorInputElement.addEventListener("change", (event) => {
      if (event.target instanceof HTMLInputElement) {
        const enteredSelector = event.target?.value;
        this.inputValue = enteredSelector;
      }

      this.onInputSubmit(this.answer, this.inputValue);
    });

    editorInputFormElement?.addEventListener("submit", (event) => {
      event.preventDefault();
      this.inputValue = "";
      editorInputElement.value = "";
    });

    const buttonElement = document.createElement("button");
    buttonElement.type = "button";
    buttonElement.innerText = "enter";

    editorInputFormElement.append(editorInputElement);
    editorInputFormElement.append(buttonElement);

    return this.cssEditorBlock;
  }
}

export default CssEditor;
