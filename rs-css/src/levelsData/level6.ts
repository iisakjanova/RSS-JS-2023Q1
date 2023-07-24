const level6 = {
  title: "Select the circle and ellipse",
  description: "Comma Combinator",
  layoutCode: {
    id: "1",
    tag: "div",
    class: "table",
    children: [
      {
        id: "2",
        tag: "circle",
        class: "big",
        targetShape: true,
      },
      {
        id: "3",
        tag: "square",
        class: "big",
        children: [
          {
            id: "5",
            tag: "circle",
            class: "small",
          },
        ],
      },
      {
        id: "4",
        tag: "ellipse",
        class: "big",
        targetShape: true,
      },
    ],
  },
  answer: "circle, ellipse",
};

export default level6;
