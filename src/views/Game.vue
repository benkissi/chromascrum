<script setup lang="ts">
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { useGameStore } from "../stores/game";
import Player from "../components/game/Player.vue";
import PCButton from "../components/common/PCButton.vue";
import Task from "../components/game/Task.vue";
import AddTask from "../components/game/AddTask.vue";
import GameBoard from "../components/game/GameBoard.vue";
import Nav from "../components/game/Nav.vue";
import SummaryStats from "../components/game/SummaryStats.vue";
import Footer from "../components/game/Footer.vue";

import PCModal from "../components/common/PCModal.vue";

import { sendTask, removeTask } from "../socket";

import { toastify } from "../utils/methods";

const gameStore = useGameStore();
const { tasks, roomInfo, details } = storeToRefs(gameStore);
const showModal = ref(false);

const taskTitle = ref("");
const taskDescription = ref("");

const players = computed(() => {
  if (roomInfo.value) {
    return roomInfo.value.users;
  }
  return [];
});

const votedCount = computed(() => {
  if (roomInfo.value) {
    const votedList = roomInfo.value.users.filter((user) => user.vote !== null);
    return votedList.length;
  }

  return 0;
});

const handleAddTask = () => {
  const payload = {
    gameRoom: details.value?.room,
    title: taskTitle.value,
    description: taskDescription.value,
  };

  sendTask(payload, (error: string) => {
    if (error) {
      toastify(error, "error");
    }
  });

  showModal.value = false;
  taskTitle.value = "";
  taskDescription.value = "";
};

const handleRemoveTask = (id: string | number) => {
  const payload = {
    gameRoom: details.value?.room,
    taskId: id,
  };
  console.log("payload", payload);
  removeTask(payload, (error: string) => {
    if (error) {
      toastify(error, "error");
    }
  });
};
</script>

<template>
  <div class="flex w-full h-full">
    <PCModal :show="showModal" @close="showModal = false">
      <template #header>
        <div>Add new task</div>
      </template>
      <div class="mt-10">
        <AddTask
          v-model:title="taskTitle"
          v-model:description="taskDescription"
          @submit="handleAddTask"
        />
      </div>
    </PCModal>
    <div class="h-full w-[500px] bg-purple-100 p-7">
      <div class="h-[50%]">
        <div class="flex justify-between mb-5">
          <div class="text-xl font-bold">Players</div>
          <div>{{ votedCount }}/{{ players.length }} Played</div>
        </div>

        <div class="h-[87%] overflow-y-scroll">
          <div v-for="player in players" :key="player.id">
            <div class="p-2">
              <Player :name="player.username" :vote="player.vote" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex-col h-[50%]">
        <div class="flex items-center justify-between mb-10">
          <di class="text-xl font-bold">Tasks</di>
          <div class="w-[40%]">
            <PCButton text="Add" @click="showModal = true" />
          </div>
        </div>
        <div class="pt-2 w-full h-[87%] overflow-y-scroll">
          <div
            v-if="tasks.length === 0"
            class="text-center font-[600] text-gray-400"
          >
            No task added yet
          </div>
          <div v-else class="!w-[98%]">
            <div class="mb-10" v-for="item in tasks" :key="item.title">
              <Task :score="item.score" @remove="handleRemoveTask(item.id)">
                <template #title>
                  {{ item.title }}
                </template>
                <template #description>
                  {{ item.description }}
                </template>
              </Task>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col p-2 flex-1 overflow-hidden">
      <Nav class="mb-10" gameName="Sprint10" />
      <div class="flex-1">
        <GameBoard />
      </div>
      <div class="w-full relative mt-20"><Footer /></div>
      <div>
        <SummaryStats />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #a2a2a2 transparent;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 6px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: #a2a2a2;
  border-radius: 20px;
  border: 3px solid transparent;
}
</style>
