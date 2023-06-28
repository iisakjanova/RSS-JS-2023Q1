import EditorViewerHeader from "../editor-viewer-header/editor-viewer-header";
import { CustomNodeType } from "../../types";

import "./html-viewer.css";

interface HtmlViewerInterface {
  render(): HTMLDivElement;
}

class HtmlViewer implements HtmlViewerInterface {
  htmlViewerBlock: HTMLDivElement;

  layout: CustomNodeType;

  constructor(layout: CustomNodeType) {
    this.layout = layout;
    this.htmlViewerBlock = document.createElement("div");
  }

  private findElement(id: string) {
    const layoutElementInViewer = document.querySelector(".table-block");
    const element = layoutElementInViewer?.querySelector(`[data-id="${id}"]`);
    return element;
  }

  private nodeToHtml(node: CustomNodeType) {
    const element = document.createElement("div");
    element.setAttribute("data-id", node.id);

    const childrenLength = node.children?.length ?? 0;
    const classString = node.class ? ` class="${node.class}"` : "";
    const idString = /^[a-zA-Z]+$/.test(node.id) ? ` id="${node.id}"` : "";

    if (childrenLength === 0) {
      // Insert first line
      element.appendChild(
        document.createTextNode(`<${node.tag}${classString}${idString} />`)
      );
    } else {
      // Insert first line
      element.appendChild(
        document.createTextNode(`<${node.tag}${classString}${idString}>`)
      );
      // Insert children
      if (node.children) {
        for (let i = 0; i < childrenLength; i += 1) {
          const child = this.nodeToHtml(node.children[i]);
          element.append(child);
        }
      }
      // Insert last line
      element.appendChild(document.createTextNode(`</${node.tag}>`));
    }
    // Add event listener
    element.addEventListener("mouseenter", (event) => {
      const targetedElement = event.currentTarget;
      const layoutElement = document.querySelector(".layout");
      const divElements = layoutElement?.querySelectorAll("div");
      if (divElements) {
        for (let i = 0; i < divElements.length; i += 1) {
          divElements[i].classList.remove("hovered");
        }
      }

      if (targetedElement instanceof HTMLElement) {
        targetedElement.classList.add("hovered");

        const matchingElementInTable = this.findElement(
          targetedElement.dataset.id ?? ""
        );
        matchingElementInTable?.classList.add("hovered");
        matchingElementInTable?.parentElement?.classList.remove("hovered");
      }
    });

    element.addEventListener("mouseleave", (event) => {
      const targetedElement = event.currentTarget;

      if (targetedElement instanceof HTMLElement) {
        if (
          targetedElement.closest(".layout") &&
          targetedElement.parentElement?.className !== "layout"
        ) {
          targetedElement.parentElement?.classList.add("hovered");
        }
        targetedElement.classList.remove("hovered");

        const matchingElementInTable = this.findElement(
          targetedElement.dataset.id ?? ""
        );

        if (
          matchingElementInTable?.closest(".layout") &&
          matchingElementInTable.parentElement?.className !== "layout"
        ) {
          matchingElementInTable.parentElement?.classList.add("hovered");
        }
        matchingElementInTable?.classList.remove("hovered");
      }
    });

    return element;
  }

  public render() {
    this.htmlViewerBlock.className = "html-viewer-block";

    const header = new EditorViewerHeader("HTML Viewer", "table.html").render();
    this.htmlViewerBlock.append(header);

    const htmlViewer = document.createElement("div");
    htmlViewer.className = "html-viewer";

    this.htmlViewerBlock.append(htmlViewer);

    const lineNumbers = document.createElement("ul");
    lineNumbers.className = "line-numbers";

    for (let i = 1; i <= 14; i += 1) {
      const lineNumbersItem = document.createElement("li");

      lineNumbersItem.className = "line-numbers-item";
      lineNumbersItem.innerText = i.toString();
      lineNumbers.append(lineNumbersItem);
    }

    htmlViewer.append(lineNumbers);

    const layoutElement = document.createElement("div");
    layoutElement.className = "layout";

    layoutElement.appendChild(this.nodeToHtml(this.layout));

    htmlViewer.append(layoutElement);

    return this.htmlViewerBlock;
  }
}

export default HtmlViewer;
