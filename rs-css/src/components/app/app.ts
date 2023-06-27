import CssEditor from "../css-editor/css-editor";
import HtmlViewer from "../html-viewer/html-viewer";
import Table from "../table/table";
import levelsData from "../../levelsData/levelsData";
import Game from "../game/game";
import Levels from "../levels/levels";

interface App {
  render(): void;
}

type BlockInstance = Table | HtmlViewer | CssEditor;

class App {
  cssEditor: CssEditor;

  htmlViewer: HtmlViewer;

  table: Table;

  game: Game;

  levels: Levels;

  container: HTMLElement | null;

  editorAndViewerWrapper: HTMLDivElement;

  constructor() {
    this.game = new Game();
    this.cssEditor = new CssEditor(
      this.onInputSubmit.bind(this),
      levelsData[1]
    );
    this.htmlViewer = new HtmlViewer(levelsData[1].layoutCode);
    this.table = new Table(levelsData[1].layoutCode);
    this.levels = new Levels(this.onChangeLevel.bind(this));
    this.container = document.getElementById("app-container");
    this.editorAndViewerWrapper = document.createElement("div");
  }

  private rerenderBlock(
    oldElSelector: string,
    parentEl: HTMLElement | null,
    newInstance: BlockInstance
  ) {
    const oldEl = parentEl?.querySelector(oldElSelector);
    const newTable = newInstance.render();

    if (oldEl instanceof HTMLDivElement) {
      parentEl?.replaceChild(newTable, oldEl);
    }
  }

  public onChangeLevel(num: string) {
    this.table = new Table(levelsData[num].layoutCode);
    this.rerenderBlock(".table-block", this.container, this.table);

    this.htmlViewer = new HtmlViewer(levelsData[num].layoutCode);
    this.rerenderBlock(
      ".html-viewer-block",
      this.editorAndViewerWrapper,
      this.htmlViewer
    );

    this.cssEditor = new CssEditor(
      this.onInputSubmit.bind(this),
      levelsData[num]
    );
    this.rerenderBlock(
      ".css-editor-block",
      this.editorAndViewerWrapper,
      this.cssEditor
    );
  }

  public onInputSubmit(answer: string, userAnswer: string) {
    this.game.checkAnswer(answer, userAnswer);
  }

  public render() {
    const tableElement = this.table.render();
    const levelsElement = this.levels.render();

    this.editorAndViewerWrapper.className = "editor-viewer-blocks-wrapper";

    const cssEditorElement = this.cssEditor.render();
    const htmlViewerElement = this.htmlViewer.render();

    this.editorAndViewerWrapper.append(cssEditorElement);
    this.editorAndViewerWrapper.append(htmlViewerElement);

    if (this.container) {
      this.container.append(tableElement);
      this.container.append(this.editorAndViewerWrapper);
      this.container.append(levelsElement);
    }
  }
}

export default App;
