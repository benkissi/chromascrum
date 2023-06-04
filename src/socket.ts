import { reactive } from "vue";
import { io } from "socket.io-client";
import type { Socket } from "socket.io-client";

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

socket.on("disconnect", () => {
  state.connected = false;
});
