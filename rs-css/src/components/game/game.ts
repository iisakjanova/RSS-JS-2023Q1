import { GameStatsType } from "../../types";

class Game {
  currentLevel: number;

  gameStats: GameStatsType;

  levelsQty: number;

  levelsDone: number;

  constructor(levelsQty: number) {
    this.currentLevel = 1;
    this.levelsQty = levelsQty;
    this.gameStats = this.createGameStats();
    this.levelsDone = 0;
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
      alert("Congratulations! You win!");
    }
  }

  public checkAnswer(answer: string, userAnswer: string) {
    if (answer === userAnswer) {
      this.winLevel();
      return true;
    }

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
