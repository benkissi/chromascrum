<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["toggle"]);
const props = withDefaults(
  defineProps<{
    currentState: boolean;
    disabled: boolean;
  }>(),
  {
    currentState: false,
    disabled: false,
  }
);

const toggle = ref(false);

const handleToggle = () => {
  if (!props.disabled) {
    toggle.value = !toggle.value;
    emit("toggle", toggle.value);
  }
};
</script>

<template>
  <div
    :class="[
      'flex w-12  p-1 rounded-full cursor-pointer relative',
      toggle && !disabled
        ? 'bg-purple-600'
        : disabled
        ? 'bg-purple-200'
        : 'bg-purple-400',
    ]"
    @click="handleToggle"
  >
    <div
      :class="[
        'w-3/5 h-4 bg-white rounded-full transition-all duration-500 ease-in-out mr-[50%]',
        toggle ? 'ml-[50%] !mr-[0%]' : '',
      ]"
    ></div>
  </div>
</template>
