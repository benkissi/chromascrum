export interface IHTMLInputEvent extends Event {
  target: HTMLInputElement;
}

export type TSelectItem = {
  text: string;
  value: string;
};

export type TSelectOptions = TSelectItem[];

export interface IGameState {
  tasks: TGameTask[];
}

export type TGameTask = {
  id: number | string;
  title: string;
  description: string;
};
