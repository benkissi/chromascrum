<script setup lang="ts">
const emit = defineEmits(["click"]);
defineProps<{
  text: string;
  disabled?: boolean;
  bgColor?: string;
  lg?: boolean;
}>();
</script>

<template>
  <button
    :disabled="disabled"
    :class="[
      'w-full rounded text-white text-center capitalize text-lg ',
      disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer',
      bgColor ? bgColor : 'bg-purple-600',
      lg ? 'p-4 px-10' : 'p-2',
    ]"
    @click="emit('click')"
  >
    {{ text }}
  </button>
</template>
