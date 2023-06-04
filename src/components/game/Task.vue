<script setup lang="ts">
import GIcon from "../common/GIcon.vue";
const emit = defineEmits(["remove"]);
</script>

<template>
  <div class="relative rounded border bg-white p-5 shadow-md w-full">
    <div
      @click="emit('remove')"
      class="flex items-center absolute p-1 cursor-pointer rounded bg-black text-white shadow-sm border -right-2 -top-2"
    >
      <GIcon name="close" />
    </div>

    <div class="text-xl font-bold">
      <slot name="title">Create frontend page</slot>
    </div>
    <div class="mt-4 text-gray-700 text-md">
      <slot name="description">Create frontend page</slot>
    </div>
    <div
      class="absolute p-2 rounded -bottom-4 -right-2 text-white font-bold bg-orange-600"
    >
      10
    </div>
  </div>
</template>

<style scoped></style>
