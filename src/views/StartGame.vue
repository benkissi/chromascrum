<script setup lang="ts">
import { ref } from "vue";

import PCInput from "../components/common/PCInput.vue";
import PCSelect from "../components/common/PCSelect.vue";
import PCButton from "../components/common/PCButton.vue";
import CardsImage from "../assets/svg/CardsImage.vue";

const gameName = ref("");
const votingType = ref("");
const username = ref("");

const votingOptions = [
  {
    text: "Fibonacci ( 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 )",
    value: "fibonacci",
  },
  {
    text: "Powers of 2 ( 0, 1, 2, 4, 8, 16, 32, 64 )",
    value: "powers of 2",
  },
];

const handleStartGame = () => {
  console.log(gameName.value, votingType.value);
};
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="self-center">
      <CardsImage />
    </div>
    <div class="self-center font-albert text-2xl mt-[-50px] mb-[50px]">
      Gamify your scrum points allocation
    </div>

    <div class="flex items-center justify-center w-full">
      <div class="grid grid-cols-2 gap-10 w-full">
        <div class="flex flex-col items-center p-10">
          <div class="font-passion text-4xl">Create new game</div>
          <div class="w-[70%]">
            <PCInput
              v-model="gameName"
              placeholder="Game name"
              class="mt-10 w-full"
            />
            <PCSelect
              class="mt-5 w-full"
              placeholder="Select voting type"
              :options="votingOptions"
              v-on:selection="(value) => (votingType = value)"
            />
            <PCInput
              placeholder="Type a username"
              class="mt-5"
              v-model="username"
            />
            <PCButton
              text="Start game"
              @btnClick="handleStartGame"
              class="mt-10"
            />
          </div>
        </div>

        <div class="flex flex-col items-center border-l p-10 relative">
          <div
            class="text-center text-gray-400 h-[50px] w-[50px] bg-white text-2xl absolute left-[-27px] top-[47%]"
          >
            OR
          </div>
          <div class="font-passion text-4xl">Join Game</div>
          <div class="w-[70%]">
            <PCInput
              v-model="gameName"
              placeholder="Game name"
              class="mt-10 w-full"
            />
            <PCInput
              placeholder="Type a username"
              class="mt-5"
              v-model="username"
            />
            <PCButton
              text="Join game"
              @btnClick="handleStartGame"
              class="mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
