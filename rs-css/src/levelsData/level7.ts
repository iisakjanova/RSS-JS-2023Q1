const level7 = {
  title: "Select the 1st square",
  description: "First of type Selector",
  layoutCode: {
    id: "1",
    tag: "div",
    class: "table",
    children: [
      {
        id: "2",
        tag: "square",
        class: "small",
        targetShape: true,
      },
      {
        id: "3",
        tag: "square",
        class: "small",
      },
      {
        id: "4",
        tag: "square",
        class: "small",
      },
    ],
  },
  answer: "square:first-of-type",
};

export default level7;
