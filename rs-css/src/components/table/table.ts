import { CustomNodeType } from "../html-viewer/html-viewer";

import "./table.css";

class Table {
  data: CustomNodeType;

  constructor(data: CustomNodeType) {
    this.data = data;
  }

  private nodeToHtml(node: CustomNodeType) {
    const element = document.createElement(node.tag);
    element.className = node.class ?? "";

    const childrenLength = node.children?.length ?? 0;

    if (node.children) {
      for (let i = 0; i < childrenLength; i += 1) {
        const child = this.nodeToHtml(node.children[i]);
        element.append(child);
      }
    }

    element.addEventListener("mouseenter", function (event) {
      const targetedElement = event.currentTarget;
      const layoutElement = document.querySelector(".table-block");
      const divElements = layoutElement?.querySelectorAll("div");
      if (divElements) {
        for (let i = 0; i < divElements.length; i += 1) {
          divElements[i].classList.remove("hovered");
        }
      }

      if (targetedElement instanceof HTMLElement) {
        targetedElement.classList.add("hovered");
      }
    });

    element.addEventListener("mouseleave", function (event) {
      const targetedElement = event.currentTarget;

      if (targetedElement instanceof HTMLElement) {
        if (
          targetedElement.closest(".table-block") &&
          targetedElement.parentElement?.className !== "table-block"
        ) {
          targetedElement.parentElement?.classList.add("hovered");
        }
        targetedElement.classList.remove("hovered");
      }
    });

    return element;
  }

  public render() {
    const tableBlockElement = document.createElement("div");
    tableBlockElement.className = "table-block";
    tableBlockElement.appendChild(this.nodeToHtml(this.data));
    return tableBlockElement;
  }
}

export default Table;
