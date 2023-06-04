<script setup lang="ts">
const emit = defineEmits(["click"]);
const props = defineProps<{
  text: string;
  textColor?: string;
  disabled?: boolean;
  bgColor?: string;
  lg?: boolean;
  outline?: boolean;
}>();

const outlineStyle = "bg-purple-50 border-2 border-purple-600 text-purple-600";
const bgStyle = `${props.bgColor || "bg-purple-600"} ${
  props.textColor || "text-white"
}`;
</script>

<template>
  <button
    :disabled="disabled"
    :class="[
      'w-full rounded text-center capitalize text-lg font-albert',
      disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer',
      lg ? 'p-4 px-10' : 'p-2',
      outline ? outlineStyle : bgStyle,
    ]"
    @click="emit('click')"
  >
    {{ text }}
  </button>
</template>
