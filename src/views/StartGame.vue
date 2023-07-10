<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useValidation } from "../composables/useValidation.js";
import { useGameStore } from "../stores/game";

import PCInput from "../components/common/PCInput.vue";
import PCSelect from "../components/common/PCSelect.vue";
import PCButton from "../components/common/PCButton.vue";
import CardsImage from "../assets/svg/CardsImage.vue";

import { socket } from "../socket";

import { TSocketGame, TSocketUser } from "../utils/types";
import { toastify } from "../utils/methods";

const router = useRouter();
const gameStore = useGameStore();

const formValues = reactive({
  gameName: "",
  votingType: "",
  userName: "",
});

const joinValues = reactive({
  gameName: "",
  userName: "",
});

const formRules = {
  gameName: {
    required: true,
  },
  votingType: {
    required: true,
  },
  userName: {
    required: true,
    minLength: 3,
  },
};

const joinRules = {
  gameName: {
    required: true,
  },
  userName: {
    required: true,
    minLength: 3,
  },
};

const { isError: createError, errors } = useValidation(formValues, formRules);
const { isError: joinError, errors: joinErrors } = useValidation(
  joinValues,
  joinRules
);

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
  if (createError.value) {
    toastify("Fill all fields", "error");
    return;
  }
  console.log("level2 ", formValues);

  socket.emit(
    "startGame",
    formValues,
    (error: string, game: TSocketGame, user: TSocketUser) => {
      if (error) {
        console.log(error);
      } else {
        console.log("created--->", game, user);
        toastify("Game created successfully", "success");
        gameStore.setDetails(game);
        router.push({ name: "game", params: { id: game.room } });
      }
    }
  );
};
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="self-center">
      <CardsImage />
    </div>
    <div class="self-center font-albert text-2xl mt-[10px] mb-[50px]">
      Gamify your scrum points allocation
    </div>

    <div class="flex items-center justify-center w-full">
      <div class="grid grid-cols-2 gap-10 w-full">
        <div class="flex flex-col items-center p-10">
          <div class="font-passion text-4xl">Create new game</div>
          <div class="w-[70%]">
            <PCInput
              v-model="formValues.gameName"
              placeholder="Game name"
              class="mt-10 w-full"
              :errorMsg="errors['gameName']"
            />
            <PCSelect
              class="mt-5 w-full"
              placeholder="Select voting type"
              :options="votingOptions"
              v-on:selection="(value) => (formValues.votingType = value)"
              :errorMsg="errors['votingType']"
            />
            <PCInput
              placeholder="Type a username"
              class="mt-5"
              v-model="formValues.userName"
              :errorMsg="errors['userName']"
            />
            <PCButton
              text="Start game"
              @click="handleStartGame"
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
              v-model="joinValues.gameName"
              placeholder="Game name"
              class="mt-10 w-full"
              :errorMsg="joinErrors['gameName']"
            />
            <PCInput
              placeholder="Type a username"
              class="mt-5"
              v-model="joinValues.userName"
              :errorMsg="joinErrors['userName']"
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
