class Game {
  public checkAnswer(answer: string, userAnswer: string) {
    if (answer === userAnswer) {
      console.log("win");
    } else {
      console.log("fail");
    }
  }
}

export default Game;
