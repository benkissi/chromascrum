<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import { storeToRefs } from "pinia";
import CardItem from "./CardItem.vue";
import PCButton from "../common/PCButton.vue";
import Cards from "./Cards.vue";
import { useGameStore } from "../../stores/game";
import { toastify } from "../../utils/methods";

import { sendVote } from "../../socket";

const gameStore = useGameStore();
const { hasIncompleteTasks, currentUser, details } = storeToRefs(gameStore);

const reveal = ref(false);
const votingType = ref("powers of 2");
const selectedVote: Ref<string | number> = ref("");

const handleVoteSelection = (selection: number | string) => {
  selectedVote.value = selection;
  sendVote({ user: currentUser.value, vote: selection }, (error: string) => {
    console.log("error----", error);
    if (error) {
      toastify(error, "error");
    }
  });
};
</script>

<template>
  <div class="flex flex-col w-full h-full">
    <div
      class="flex flex-col flex-1 items-center justify-between h-full w-full"
    >
      <div>
        <CardItem :reveal="reveal" name="Ben Kissi" />
      </div>
      <div
        class="p-5 rounded-full h-[150px] w-[60%] bg-purple-100 border-purple-300 border-[10px] shadow-lg"
      >
        <div
          class="flex items-center justify-center h-full w-full border border-purple-300 rounded-full px-5"
        >
          <PCButton
            outline
            :text="reveal ? 'Hide' : 'Reveal'"
            @click="reveal = !reveal"
            class="w-[50%]"
          />
        </div>
      </div>
      <div>
        <CardItem :reveal="reveal" name="Ben Kissi" />
      </div>
    </div>

    <div v-if="hasIncompleteTasks" class="flex justify-center">
      <Cards
        :type="votingType"
        :ready="true"
        :selection="selectedVote"
        v-on:voteSelected="handleVoteSelection"
      />
    </div>
  </div>
</template>

<style scoped></style>
