import CssEditor from "../css-editor/css-editor";
import HtmlViewer from "../html-viewer/html-viewer";
import Table from "../table/table";
import levelsData from "../../levelsData/levelsData";
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
    this.cssEditor = new CssEditor(
      this.onInputSubmit.bind(this),
      levelsData[1]
    );
    this.htmlViewer = new HtmlViewer();
    this.table = new Table(levelsData[1].layoutCode);
    this.levels = new Levels(this.onChangeLevel.bind(this));
    this.container = document.getElementById("app-container");
  }

  public onChangeLevel(num: string) {
    const oldTable = this.container?.querySelector(".table-block");
    this.table = new Table(levelsData[num].layoutCode);
    const newTable = this.table.render();

    if (oldTable instanceof HTMLDivElement) {
      this.container?.replaceChild(newTable, oldTable);
    }
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
