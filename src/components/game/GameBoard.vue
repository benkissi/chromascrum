<script setup lang="ts">
import { ref } from "vue";
import CardItem from "./CardItem.vue";
import PCButton from "../common/PCButton.vue";

const reveal = ref(false);
</script>

<template>
  <div class="flex flex-col items-center justify-between h-full w-full">
    <div>
      <CardItem :reveal="reveal" name="Ben Kissi" />
    </div>
    <div
      class="p-5 rounded-full h-[150px] w-[60%] bg-purple-100 border-purple-300 border-[10px] shadow-lg"
    >
      <div
        class="flex items-center justify-center h-full w-full border border-purple-300 rounded-full"
      >
        <PCButton
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
</template>

<style scoped></style>
