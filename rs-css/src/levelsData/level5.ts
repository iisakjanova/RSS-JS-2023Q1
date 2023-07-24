const level5 = {
  title: "Select the empty circle",
  description: "Empty Selector",
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
        tag: "circle",
        class: "big",
        children: [
          {
            id: "6",
            tag: "square",
            class: "small",
          },
        ],
      },
    ],
  },
  answer: "circle:empty",
};

export default level5;
