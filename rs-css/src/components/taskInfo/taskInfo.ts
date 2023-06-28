import "./taskInfo.css";

class TaskInfo {
  title: string;

  description: string;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }

  public render() {
    const taskInfoBlockElement = document.createElement("div");
    taskInfoBlockElement.className = "task-info-block";

    const taskTitle = document.createElement("h2");
    taskTitle.className = "task-title";
    taskTitle.innerText = this.title;

    const taskDescription = document.createElement("p");
    taskDescription.className = "task-description";
    taskDescription.innerText = this.description;

    taskInfoBlockElement.append(taskTitle);
    taskInfoBlockElement.append(taskDescription);

    return taskInfoBlockElement;
  }
}

export default TaskInfo;
