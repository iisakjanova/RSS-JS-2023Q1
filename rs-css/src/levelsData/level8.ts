const level8 = {
  title: "Select ellipse directly in the square",
  description: "Child Selector",
  layoutCode: {
    id: "1",
    tag: "div",
    class: "table",
    children: [
      {
        id: "2",
        tag: "square",
        class: "big",
      },
      {
        id: "3",
        tag: "square",
        class: "big",
        children: [
          {
            id: "5",
            tag: "ellipse",
            class: "small",
          },
        ],
        targetShape: true,
      },
      {
        id: "4",
        tag: "square",
        class: "big",
        children: [
          {
            id: "6",
            tag: "circle",
            class: "small",
            children: [
              {
                id: "7",
                tag: "ellipse",
                class: "small",
              },
            ],
          },
        ],
      },
    ],
  },
  answer: "square > ellipse",
};

export default level8;
