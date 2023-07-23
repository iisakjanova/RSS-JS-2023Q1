export type WinnerData = {
  [key: string]: number;
};

export type CarData = {
  [key: string]: string;
};

export type CarDataType = {
  name: string;
  color: string;
  id: number;
};

export type FullWinnerData = {
  id: number;
  wins: number;
  time: number;
  color: string;
  name: string;
};
