import { defineStore } from "pinia";
import { IGameState, TGameTask } from "../utils/types";

export const useGameStore = defineStore({
  id: "game",
  state: (): IGameState => ({
    tasks: [],
  }),
  getters: {},
  actions: {
    addTask(task: TGameTask) {
      this.tasks.push(task);
    },

    removeTask(id: number | string) {
      console.log("id--->", id);
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
});
