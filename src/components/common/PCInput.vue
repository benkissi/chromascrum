<script setup lang="ts">
defineEmits(["update:modelValue"]);

defineProps({
  modelValue: {},
  placeholder: {
    type: String,
    default: "Your input",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="border h-[50px] rounded p-2 focus:border-red-200">
    <input
      class="focus:outline-none w-full h-full bg-transparent"
      :placeholder="placeholder"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      :disabled="disabled"
    />
  </div>
</template>
