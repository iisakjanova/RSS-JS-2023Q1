export type CustomNodeType = {
  id: string;
  tag: string;
  class?: string;
  children?: CustomNodeType[];
  targetShape?: boolean;
};

export type LevelType = {
  title: string;
  description: string;
  layoutCode: CustomNodeType;
  answer: string;
};

export type LevelsDataType = {
  [key: string]: LevelType;
};

export type OnInputSubmitType = (answer: string, inputValue: string) => void;

export type OnChangeLevelType = (num: string) => void;
