import CssEditor from "../css-editor/css-editor";
import HtmlViewer from "../html-viewer/html-viewer";
import Table from "../table/table";
import layoutCode from "../../constants";

interface App {
  render(): void;
}

class App {
  cssEditor: CssEditor;

  htmlViewer: HtmlViewer;

  table: Table;

  container: HTMLElement | null;

  constructor() {
    this.cssEditor = new CssEditor();
    this.htmlViewer = new HtmlViewer();
    this.table = new Table(layoutCode);
    this.container = document.getElementById("app-container");
  }

  render() {
    const tableElement = this.table.render();
    const editorAndViewerWrapper = document.createElement("div");
    editorAndViewerWrapper.className = "editor-viewer-blocks-wrapper";

    const cssEditorElement = this.cssEditor.render();
    const htmlViewerElement = this.htmlViewer.render();

    editorAndViewerWrapper.append(cssEditorElement);
    editorAndViewerWrapper.append(htmlViewerElement);

    if (this.container) {
      this.container.append(tableElement);
      this.container.append(editorAndViewerWrapper);
    }
  }
}

export default App;
