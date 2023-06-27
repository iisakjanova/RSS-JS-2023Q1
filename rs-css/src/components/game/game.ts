class Game {
  currentLevel: number;

  constructor() {
    this.currentLevel = 1;
  }

  private winLevel() {
    this.currentLevel += 1;
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
}

export default Game;
