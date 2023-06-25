import CssEditor from "../css-editor/css-editor";
import HtmlViewer from "../html-viewer/html-viewer";
import Table from "../table/table";
import level1 from "../../constants";
import Game from "../game/game";
import Levels from "../levels/levels";

interface App {
  render(): void;
}

class App {
  cssEditor: CssEditor;

  htmlViewer: HtmlViewer;

  table: Table;

  game: Game;

  levels: Levels;

  container: HTMLElement | null;

  constructor() {
    this.game = new Game();
    this.cssEditor = new CssEditor(this.onInputSubmit.bind(this), level1);
    this.htmlViewer = new HtmlViewer();
    this.table = new Table(level1.layoutCode);
    this.levels = new Levels();
    this.container = document.getElementById("app-container");
  }

  public onInputSubmit(answer: string, userAnswer: string) {
    this.game.checkAnswer(answer, userAnswer);
  }

  public render() {
    const tableElement = this.table.render();
    const levelsElement = this.levels.render();
    const editorAndViewerWrapper = document.createElement("div");
    editorAndViewerWrapper.className = "editor-viewer-blocks-wrapper";

    const cssEditorElement = this.cssEditor.render();
    const htmlViewerElement = this.htmlViewer.render();

    editorAndViewerWrapper.append(cssEditorElement);
    editorAndViewerWrapper.append(htmlViewerElement);

    if (this.container) {
      this.container.append(tableElement);
      this.container.append(editorAndViewerWrapper);
      this.container.append(levelsElement);
    }
  }
}

export default App;
