const level9 = {
  title: "Select all the things",
  description: "Universal Selector",
  layoutCode: {
    id: "1",
    tag: "div",
    class: "table",
    children: [
      {
        id: "2",
        tag: "square",
        class: "big",
        targetShape: true,
      },
      {
        id: "3",
        tag: "circle",
        class: "big",
        children: [
          {
            id: "5",
            tag: "ellipse",
            class: "small",
            targetShape: true,
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
            targetShape: true,
          },
        ],
        targetShape: true,
      },
    ],
  },
  answer: "*",
};

export default level9;
