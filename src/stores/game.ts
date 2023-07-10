import { defineStore } from "pinia";
import { getSocketId } from "../socket";
import {
  IGameState,
  TGameTask,
  TSocketGame,
  TSocketRoom,
} from "../utils/types";

export const useGameStore = defineStore({
  id: "game",
  state: (): IGameState => ({
    tasks: [],
    details: null,
    roomInfo: null,
  }),
  getters: {
    currentUser: (state) => {
      const users = state.roomInfo?.users;

      if (!users) {
        return {};
      }
      const id = getSocketId();
      console.log("socket id", id);
      return users.find((user) => user.id === id);
    },

    hasIncompleteTasks: (state) => {
      return state.tasks.some((task) => !task.completed);
    },
  },
  actions: {
    addTask(tasks: TGameTask[]) {
      this.tasks = tasks;
    },

    removeTask(id: number | string) {
      console.log("id--->", id);
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },

    setDetails(details: TSocketGame | null) {
      this.details = details;
    },

    setRoomInfo(info: TSocketRoom) {
      this.roomInfo = info;
    },
  },
});
