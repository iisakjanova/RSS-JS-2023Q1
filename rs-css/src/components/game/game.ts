import { GameStatsType } from "../../types";
import Alert from "../alert/alert";

type DataToSaveType = {
  [key: string]: string;
};

class Game {
  currentLevel: number;

  gameStats: GameStatsType;

  levelsQty: number;

  levelsDone: number;

  alert: Alert;

  constructor(levelsQty: number, alert: Alert) {
    this.currentLevel =
      parseInt(localStorage.getItem("currentLevel") as string, 10) || 1;
    this.levelsQty = levelsQty;
    this.gameStats =
      JSON.parse(localStorage.getItem("gameStats") as string) ||
      this.createGameStats();
    this.levelsDone =
      parseInt(localStorage.getItem("levelsDone") as string, 10) || 0;
    this.alert = alert;
  }

  private createGameStats() {
    const gameStats: GameStatsType = {};

    for (let i = 1; i <= this.levelsQty; i += 1) {
      gameStats[i] = false;
    }

    return gameStats;
  }

  private winLevel() {
    this.gameStats[this.currentLevel] = true;

    if (this.currentLevel < this.levelsQty) {
      this.currentLevel += 1;
    }

    this.levelsDone += 1;

    const dataToSave = {
      levelsDone: this.levelsDone.toString(),
      currentLevel: this.currentLevel.toString(),
      gameStats: JSON.stringify(this.gameStats),
    };

    this.saveToLocalStorage(dataToSave);

    if (this.levelsDone === this.levelsQty) {
      this.alert.showAlert("Congratulations! You win!");
    }
  }

  private looseLevel() {
    const cssEditorViewerElement = document.querySelector(
      ".editor-viewer-blocks-wrapper"
    );
    cssEditorViewerElement?.classList.add("shaking-animation");

    setTimeout(() => {
      cssEditorViewerElement?.classList.remove("shaking-animation");
    }, 1000);
  }

  private saveToLocalStorage(data: DataToSaveType) {
    const keys = Object.keys(data);

    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      localStorage.setItem(key, data[key]);
    }
  }

  public checkAnswer(answer: string, userAnswer: string) {
    if (answer === userAnswer) {
      this.winLevel();
      return true;
    }

    this.looseLevel();
    return false;
  }

  public getCurrentLevel() {
    return this.currentLevel.toString();
  }

  public setCurrentLevel(level: string) {
    this.currentLevel = Number(level);
  }

  public getGameStats() {
    return this.gameStats;
  }
}

export default Game;
