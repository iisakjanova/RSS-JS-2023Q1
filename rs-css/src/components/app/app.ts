import CssEditor from "../css-editor/css-editor";
import HtmlViewer from "../html-viewer/html-viewer";
import Table from "../table/table";
import levelsData from "../../levelsData/levelsData";
import Game from "../game/game";
import Levels from "../levels/levels";
import Alert from "../alert/alert";
import TaskInfo from "../taskInfo/taskInfo";
import Footer from "../footer/footer";

type BlockInstance = Table | HtmlViewer | CssEditor | Levels | TaskInfo;

class App {
  cssEditor: BlockInstance;

  htmlViewer: BlockInstance;

  table: BlockInstance;

  game: Game;

  levels: BlockInstance;

  container: HTMLElement | null;

  editorAndViewerWrapper: HTMLDivElement;

  gameBlockElement: HTMLDivElement;

  taskBlockElement: HTMLDivElement;

  alert: Alert;

  taskInfo: BlockInstance;

  constructor() {
    this.alert = new Alert();
    this.game = new Game(Object.keys(levelsData).length, this.alert);
    this.cssEditor = new CssEditor(
      this.onInputSubmit.bind(this),
      levelsData[this.game.getCurrentLevel()]
    );
    this.htmlViewer = new HtmlViewer(
      levelsData[this.game.getCurrentLevel()].layoutCode
    );
    this.taskInfo = new TaskInfo(
      levelsData[this.game.getCurrentLevel()].title,
      levelsData[this.game.getCurrentLevel()].description
    );
    this.table = new Table(levelsData[this.game.getCurrentLevel()].layoutCode);
    this.levels = new Levels(
      this.onChangeLevel.bind(this),
      this.game.getCurrentLevel(),
      this.game.getGameStats(),
      this.clearGameData.bind(this)
    );
    this.container = document.getElementById("app-container");
    this.editorAndViewerWrapper = document.createElement("div");
    this.gameBlockElement = document.createElement("div");
    this.taskBlockElement = document.createElement("div");
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

  public clearGameData() {
    this.game = new Game(Object.keys(levelsData).length, this.alert);
    this.onChangeLevel("1");
  }

  public onChangeLevel(num: string) {
    this.game.setCurrentLevel(num);

    this.taskInfo = new TaskInfo(
      levelsData[num].title,
      levelsData[num].description
    );
    this.rerenderBlock(
      ".task-info-block",
      this.taskBlockElement,
      this.taskInfo
    );

    this.table = new Table(levelsData[num].layoutCode);
    this.rerenderBlock(".table-block", this.taskBlockElement, this.table);

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

    this.levels = new Levels(
      this.onChangeLevel.bind(this),
      this.game.getCurrentLevel(),
      this.game.getGameStats(),
      this.clearGameData.bind(this)
    );
    this.rerenderBlock(".levels-block", this.gameBlockElement, this.levels);
  }

  public onInputSubmit(answer: string, userAnswer: string) {
    const result = this.game.checkAnswer(answer, userAnswer);

    if (result) {
      const levelNum = this.game.getCurrentLevel();
      this.onChangeLevel(levelNum);
    }
  }

  public render() {
    const taskInfoElement = this.taskInfo.render();
    const tableElement = this.table.render();
    const levelsElement = this.levels.render();

    this.editorAndViewerWrapper.className = "editor-viewer-blocks-wrapper";

    const cssEditorElement = this.cssEditor.render();
    const htmlViewerElement = this.htmlViewer.render();

    this.editorAndViewerWrapper.append(cssEditorElement);
    this.editorAndViewerWrapper.append(htmlViewerElement);

    const alertElement = this.alert.render();

    const footer = new Footer();
    const footerElement = footer.render();

    this.gameBlockElement = document.createElement("div");
    this.gameBlockElement.className = "game-block";

    this.taskBlockElement.className = "task-block";

    this.taskBlockElement.append(taskInfoElement);
    this.taskBlockElement.append(tableElement);
    this.taskBlockElement.append(this.editorAndViewerWrapper);

    this.gameBlockElement.append(this.taskBlockElement);
    this.gameBlockElement.append(levelsElement);

    if (this.container) {
      this.container.append(this.gameBlockElement);
      this.container.append(alertElement);
      this.container.append(footerElement);
    }
  }
}

export default App;
