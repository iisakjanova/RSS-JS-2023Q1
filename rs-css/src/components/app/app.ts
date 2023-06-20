import CssEditor from "../css-editor/css-editor";
import HtmlViewer from "../html-viewer/html-viewer";

interface App {
  render(): void;
}

class App {
  cssEditor: CssEditor;

  htmlViewer: HtmlViewer;

  container: HTMLElement | null;

  constructor() {
    this.cssEditor = new CssEditor();
    this.htmlViewer = new HtmlViewer();
    this.container = document.getElementById("app-container");
  }

  render() {
    const editorAndViewerWrapper = document.createElement("div");
    editorAndViewerWrapper.className = "editor-viewer-blocks-wrapper";

    const cssEditorElement = this.cssEditor.render();
    const htmlViewerElement = this.htmlViewer.render();

    editorAndViewerWrapper.append(cssEditorElement);
    editorAndViewerWrapper.append(htmlViewerElement);

    if (this.container) {
      this.container.append(editorAndViewerWrapper);
    }
  }
}

export default App;
