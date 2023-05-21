<script setup lang="ts">
import GIcon from "./GIcon.vue";
const emit = defineEmits(["close"]);

defineProps({
  show: Boolean,
});

const handleClose = () => {
  emit("close");
};
</script>

<template>
  <div
    :class="{ '!flex': show, hidden: !show }"
    class="justify-center items-center absolute z-10 top-0 left-0 w-full h-full bg-purple-300 bg-opacity-80 px-3 md:px-0"
  >
    <div class="opacity-100 bg-white rounded p-5 md:w-1/2 relative">
      <div
        @click="handleClose"
        class="flex items-center absolute p-1 cursor-pointer rounded bg-black text-white shadow-sm border -right-2 -top-2"
      >
        <GIcon name="close" />
      </div>
      <div class="font-bold text-lg text-gray-700">
        <slot name="header">Header</slot>
      </div>
      <slot> </slot>
    </div>
  </div>
</template>
