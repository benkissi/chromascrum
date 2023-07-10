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
  details: TSocketGame | null;
  roomInfo: TSocketRoom | null;
}

export type TGameTask = {
  id: number | string;
  title: string;
  description: string;
  completed: boolean;
  score: number | null;
  gameRoom: string;
};

export type TSocketGame = {
  id: string;
  name: string;
  reveal: boolean;
  room: string;
  voting: string;
};

export type TSocketRoom = {
  room: string;
  users: TSocketUser[];
};

export type TSocketUser = {
  creator: boolean;
  id: string;
  room: string;
  type: string;
  username: string;
  vote: number | null;
};

export type TToastType = "info" | "success" | "error";

export type TToastDetail = {
  type: TToastType;
  message: string;
};

export type TToastEvent = CustomEvent<TToastDetail>;
