const code = {
  tag: "div",
  class: "table",
  children: [
    {
      tag: "circle",
      class: "big",
      children: [
        {
          tag: "square",
          class: "small",
        },
      ],
    },
    {
      tag: "circle",
      class: "big",
    },
  ],
};

type CustomNodeType = {
  tag: string;
  class?: string;
  children?: CustomNodeType[];
};

interface HtmlViewer {
  render(): HTMLDivElement;
}

class HtmlViewer {
  htmlViewer: HTMLDivElement;

  constructor() {
    this.htmlViewer = document.createElement("div");
  }

  private nodeToHtml(node: CustomNodeType) {
    const element = document.createElement("div");

    const childrenLength = node.children?.length ?? 0;
    const classString = node.class ? ` class="${node.class}"` : "";
    if (childrenLength === 0) {
      // Insert first line
      element.appendChild(
        document.createTextNode(`<${node.tag}${classString} />`)
      );
    } else {
      // Insert first line
      element.appendChild(
        document.createTextNode(`<${node.tag}${classString}>`)
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
    element.addEventListener("mouseenter", function (event) {
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
      }
    });

    element.addEventListener("mouseleave", function (event) {
      const targetedElement = event.currentTarget;

      if (targetedElement instanceof HTMLElement) {
        if (
          targetedElement.closest(".layout") &&
          targetedElement.parentElement?.className !== "layout"
        ) {
          targetedElement.parentElement?.classList.add("hovered");
        }
        targetedElement.classList.remove("hovered");
      }
    });

    return element;
  }

  public render() {
    this.htmlViewer.className = "html-viewer";

    const lineNumbers = document.createElement("ul");
    lineNumbers.className = "line-numbers";

    for (let i = 1; i <= 20; i += 1) {
      const lineNumbersItem = document.createElement("li");

      lineNumbersItem.className = "line-numbers-item";
      lineNumbersItem.innerText = i.toString();
      lineNumbers.append(lineNumbersItem);
    }

    this.htmlViewer.append(lineNumbers);

    const layoutElement = document.createElement("div");
    layoutElement.className = "layout";

    layoutElement.appendChild(this.nodeToHtml(code));

    this.htmlViewer.append(layoutElement);

    return this.htmlViewer;
  }
}

export default HtmlViewer;
