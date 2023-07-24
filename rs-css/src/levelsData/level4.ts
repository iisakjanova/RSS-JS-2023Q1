const level4 = {
  title: "Select the 2nd circle",
  description: "Nth child Pseudo-selector",
  layoutCode: {
    id: "1",
    tag: "div",
    class: "table",
    children: [
      {
        id: "rainbow",
        tag: "circle",
        class: "big",
      },
      {
        id: "3",
        tag: "circle",
        class: "big",
        targetShape: true,
      },
      {
        id: "4",
        tag: "circle",
        class: "big",
      },
    ],
  },
  answer: ".table circle:nth-child(2)",
};

export default level4;
