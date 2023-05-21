<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useGameStore } from "../stores/game";
import Player from "../components/game/Player.vue";
import PCButton from "../components/common/PCButton.vue";
import Task from "../components/game/Task.vue";
import AddTask from "../components/game/AddTask.vue";
import GameBoard from "../components/game/GameBoard.vue";
import Nav from "../components/game/Nav.vue";

import PCModal from "../components/common/PCModal.vue";

const gameStore = useGameStore();
const { tasks } = storeToRefs(gameStore);
const showModal = ref(false);

const gameTitle = ref("");
const gameDescription = ref("");

const handleAddTask = () => {
  const payload = {
    id: Date.now(),
    title: gameTitle.value,
    description: gameDescription.value,
  };

  gameStore.addTask(payload);
  showModal.value = false;
  gameTitle.value = "";
  gameDescription.value = "";
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
          v-model:title="gameTitle"
          v-model:description="gameDescription"
          @submit="handleAddTask"
        />
      </div>
    </PCModal>
    <div class="h-full w-[500px] bg-purple-100 p-7">
      <div class="h-[50%]">
        <div class="text-xl font-bold mb-5">Players</div>

        <Player name="ben kissi" />
      </div>
      <div class="">
        <div class="flex items-center justify-between mb-10">
          <di class="text-xl font-bold">Tasks</di>
          <div class="w-[40%]">
            <PCButton text="Add" @click="showModal = true" />
          </div>
        </div>
        <div class="mt-10">
          <div
            v-if="tasks.length === 0"
            class="text-center font-[600] text-gray-400"
          >
            No task added yet
          </div>
          <div v-else>
            <div class="mb-10" v-for="item in tasks" :key="item.title">
              <Task @remove="gameStore.removeTask(item.id)">
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
    <div class="flex flex-col p-2 flex-1">
      <Nav class="mb-10" />
      <div class="flex-1">
        <GameBoard />
      </div>
    </div>
  </div>
</template>
