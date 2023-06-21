import "./editor-viewer-header.css";

interface EditorViewerHeaderInterface {
  render(): HTMLDivElement;
}

class EditorViewerHeader implements EditorViewerHeaderInterface {
  title: string;

  fileName: string;

  constructor(title: string, fileName: string) {
    this.title = title;
    this.fileName = fileName;
  }

  public render() {
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
