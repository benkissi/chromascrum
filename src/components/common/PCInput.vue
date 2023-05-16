<script setup lang="ts">
const emit = defineEmits(["input"]);

defineProps({
  value: {
    type: String,
  },
  placeholder: {
    type: String,
    default: "Your input",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const handleInput = (event: Event) => {
  emit("input", (event.target as HTMLInputElement).value);
};
</script>

<template>
  <div class="border rounded p-2 focus:border-red-200">
    <input
      :value="value"
      class="focus:outline-none w-full bg-transparent"
      :placeholder="placeholder"
      @input="handleInput"
      :disabled="disabled"
    />
  </div>
</template>
