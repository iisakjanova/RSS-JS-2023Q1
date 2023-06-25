export type CustomNodeType = {
  id: string;
  tag: string;
  class?: string;
  children?: CustomNodeType[];
  targetShape?: boolean;
};

export type LevelType = {
  layoutCode: CustomNodeType;
  answer: string;
};

export type OnInputSubmitType = (answer: string, inputValue: string) => void;
