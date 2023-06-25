import "./levels.css";

class Levels {
  public render() {
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
      const checkmark = document.createElement("span");
      checkmark.className = "checkmark";
      const levelTitle = document.createElement("span");
      levelTitle.innerHTML = i.toString();

      levelItemElement.append(checkmark);
      levelItemElement.append(levelTitle);
      levelsListElement.append(levelItemElement);
    }

    return levelsBlockElement;
  }
}

export default Levels;
