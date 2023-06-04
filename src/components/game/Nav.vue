<script setup lang="ts">
import { ref } from "vue";
import GIcon from "../common/GIcon.vue";
import Settings from "./Settings.vue";
import PCModal from "../common/PCModal.vue";

withDefaults(
  defineProps<{
    gameName: string;
  }>(),
  {}
);

const showModal = ref(false);

const handleCopyLink = () => {};
</script>

<template>
  <div class="flex items-center justify-between p-5 w-full">
    <PCModal :show="showModal" @close="showModal = false">
      <template #header>
        <div>Game settings</div>
      </template>
      <div class="mt-10">
        <Settings />
      </div>
    </PCModal>
    <div class="font-bold font-passion text-lg text-gray-800">
      {{ gameName }}
    </div>
    <div
      class="font-bold text-gray-700 cursor-pointer hover:text-purple-700"
      @click="handleCopyLink"
    >
      Get Invite Link
    </div>
    <div>
      <GIcon name="settings" class="cursor-pointer" @click="showModal = true" />
    </div>
  </div>
</template>

<style scoped></style>
