import { BlockInterface } from "../../types";
import "./editor-viewer-header.css";

class EditorViewerHeader implements BlockInterface<HTMLDivElement> {
  title: string;

  fileName: string;

  constructor(title: string, fileName: string) {
    this.title = title;
    this.fileName = fileName;
  }

  public render(): HTMLDivElement {
    const header = document.createElement("div");
    header.className = "editor-viewer-header";

    const titleElement = document.createElement("span");
    titleElement.innerText = this.title;

    const fileNameElement = document.createElement("span");
    fileNameElement.innerText = this.fileName;

    header.append(titleElement);
    header.append(fileNameElement);

    return header;
  }
}

export default EditorViewerHeader;
