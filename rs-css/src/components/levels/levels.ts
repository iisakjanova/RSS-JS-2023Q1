import {
  GameStatsType,
  OnChangeLevelType,
  ClearGameDataType,
  BlockInterface,
} from "../../types";
import "./levels.css";

class Levels implements BlockInterface<HTMLDivElement> {
  onChangeLevel: OnChangeLevelType;

  currentLevel: string;

  stats: GameStatsType;

  clearGameData: ClearGameDataType;

  constructor(
    onChangeLevel: OnChangeLevelType,
    currentLevel: string,
    gameStats: GameStatsType,
    clearGameData: ClearGameDataType
  ) {
    this.onChangeLevel = onChangeLevel;
    this.currentLevel = currentLevel;
    this.stats = gameStats;
    this.clearGameData = clearGameData;
  }

  private changeLevelHandler(num: string) {
    this.onChangeLevel(num);
    localStorage.setItem("currentLevel", num);
  }

  private resetBtnHandler() {
    this.clearGameData();
  }

  public render(): HTMLDivElement {
    const levelsBlockElement = document.createElement("div");
    levelsBlockElement.className = "levels-block";

    const levelsTitleElement = document.createElement("h2");
    levelsTitleElement.className = "levels-title";
    levelsTitleElement.innerHTML = "Level";
    levelsBlockElement.append(levelsTitleElement);

    const levelsListElement = document.createElement("ul");
    levelsListElement.className = "levels-list";
    levelsBlockElement.append(levelsListElement);

    for (let i = 1; i <= 10; i += 1) {
      const levelItemElement = document.createElement("li");
      levelItemElement.setAttribute("data-level", i.toString());
      const checkmark = document.createElement("span");
      checkmark.className = "checkmark";
      const levelTitle = document.createElement("span");
      levelTitle.innerHTML = i.toString();

      if (this.currentLevel === i.toString()) {
        levelItemElement.classList.add("current");
      }

      if (this.stats[i]) {
        checkmark.classList.add("done");
      }

      levelItemElement.append(checkmark);
      levelItemElement.append(levelTitle);
      levelsListElement.append(levelItemElement);
    }

    levelsBlockElement.addEventListener("click", (event) => {
      if (event.target instanceof HTMLElement) {
        const target = event.target.closest("li");

        if (target) {
          const levelNumber = target.dataset.level;

          if (levelNumber) {
            this.changeLevelHandler(levelNumber);
          }
        }
      }
    });

    const resetBtn = document.createElement("button");
    resetBtn.innerText = "reset";
    resetBtn.className = "reset-btn";
    levelsBlockElement.append(resetBtn);

    resetBtn.addEventListener("click", () => {
      localStorage.clear();
      this.resetBtnHandler();
    });

    return levelsBlockElement;
  }
}

export default Levels;
