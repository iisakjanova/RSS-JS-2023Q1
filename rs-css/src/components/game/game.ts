import { GameStatsType } from "../../types";
import Alert from "../alert/alert";

class Game {
  currentLevel: number;

  gameStats: GameStatsType;

  levelsQty: number;

  levelsDone: number;

  alert: Alert;

  constructor(levelsQty: number, alert: Alert) {
    this.currentLevel = 1;
    this.levelsQty = levelsQty;
    this.gameStats = this.createGameStats();
    this.levelsDone = 0;
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
