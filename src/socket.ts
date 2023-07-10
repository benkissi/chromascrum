import { reactive } from "vue";
import { io } from "socket.io-client";
import type { Socket } from "socket.io-client";
import { useGameStore } from "./stores/game";

import { TGameTask } from "./utils/types";

export const state = reactive({
  connected: false,
  fooEvents: [],
  barEvents: [],
});

const URL = "http://localhost:4001";

export const socket: Socket = io(URL);

socket.on("connect", () => {
  state.connected = true;
});

socket.on("roomInfo", (data) => {
  const gameStore = useGameStore();
  console.log("data--->roomInfo", data);
  gameStore.setRoomInfo(data);
});

socket.on("tasksUpdate", (data: { room: string; tasks: TGameTask[] }) => {
  console.log("updates", data);
  const gameStore = useGameStore();
  gameStore.addTask(data.tasks);
});

socket.on("disconnect", () => {
  state.connected = false;
});

export const sendTask: (data: any, cb: Function) => void = (data = {}, cb) =>
  socket.emit("addTask", data, cb);

export const removeTask: (data: any, cb: Function) => void = (data = {}, cb) =>
  socket.emit("removeTask", data, cb);

export const sendVote: (data: any, cb: Function) => void = (data = {}, cb) =>
  socket.emit("vote", data, cb);

export const getSocketId = () => {
  return socket.id;
};
