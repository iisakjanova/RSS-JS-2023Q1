const level10 = {
  title: "Select the ellipse that is next to a circle",
  description: "Adjasent Sibling Selector",
  layoutCode: {
    id: "1",
    tag: "div",
    class: "table",
    children: [
      {
        id: "2",
        tag: "circle",
        class: "small",
      },
      {
        id: "3",
        tag: "circle",
        class: "small",
      },
      {
        id: "4",
        tag: "ellipse",
        class: "small",
        targetShape: true,
      },
      {
        id: "5",
        tag: "ellipse",
        class: "small",
      },
    ],
  },
  answer: "circle + ellipse",
};

export default level10;
