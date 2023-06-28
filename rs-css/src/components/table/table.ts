import { CustomNodeType } from "../../types";

import "./table.css";

class Table {
  data: CustomNodeType;

  constructor(data: CustomNodeType) {
    this.data = data;
  }

  private findElement(id: string) {
    const layoutElementInViewer = document.querySelector(".layout");
    const element = layoutElementInViewer?.querySelector(`[data-id="${id}"]`);
    return element;
  }

  private nodeToHtml(node: CustomNodeType) {
    const element = document.createElement(node.tag);
    element.className = node.class ?? "";
    if (node.targetShape) {
      element.classList.add("target-shape-animation");
    }
    element.setAttribute("data-id", node.id);

    if (/^[a-zA-Z]+$/.test(node.id)) {
      element.id = node.id;
    }

    const childrenLength = node.children?.length ?? 0;

    if (node.children) {
      for (let i = 0; i < childrenLength; i += 1) {
        const child = this.nodeToHtml(node.children[i]);
        element.append(child);
      }
    }

    element.addEventListener("mouseenter", (event) => {
      const targetedElement = event.currentTarget;
      const layoutElement = document.querySelector(".table-block");
      const divElements = layoutElement?.querySelectorAll("div");

      if (divElements) {
        for (let i = 0; i < divElements.length; i += 1) {
          divElements[i].classList.remove("hovered");
        }
      }

      const layoutElementInViewer = document.querySelector(".layout");
      const divElementsInViewer =
        layoutElementInViewer?.querySelectorAll("div");

      if (divElementsInViewer) {
        for (let i = 0; i < divElementsInViewer.length; i += 1) {
          divElementsInViewer[i].classList.remove("hovered");
        }
      }

      if (targetedElement instanceof HTMLElement) {
        targetedElement.classList.add("hovered");
        targetedElement.parentElement?.classList.remove("hovered");

        const matchingElementInViewer = this.findElement(
          targetedElement.dataset.id ?? ""
        );
        matchingElementInViewer?.classList.add("hovered");
      }
    });

    element.addEventListener("mouseleave", (event) => {
      const targetedElement = event.currentTarget;

      if (targetedElement instanceof HTMLElement) {
        if (
          targetedElement.closest(".table-block") &&
          targetedElement.parentElement?.className !== "table-block"
        ) {
          targetedElement.parentElement?.classList.add("hovered");
        }
        targetedElement.classList.remove("hovered");

        const matchingElementInViewer = this.findElement(
          targetedElement.dataset.id ?? ""
        );

        if (
          matchingElementInViewer?.closest(".layout") &&
          matchingElementInViewer.parentElement?.className !== "layout"
        ) {
          matchingElementInViewer.parentElement?.classList.add("hovered");
        }
        matchingElementInViewer?.classList.remove("hovered");
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
