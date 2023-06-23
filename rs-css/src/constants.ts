const layoutCode = {
  id: "1",
  tag: "div",
  class: "table",
  children: [
    {
      id: "2",
      tag: "ellipse",
      class: "big",
      children: [
        {
          id: "3",
          tag: "square",
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
          id: "5",
          tag: "ellipse",
          class: "small",
          targetShape: true,
        },
      ],
    },
  ],
};

export default layoutCode;
