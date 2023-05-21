<script setup lang="ts">
defineEmits(["update:modelValue"]);

withDefaults(
  defineProps<{
    modelValue: string;
    placeholder?: string;
    disabled?: boolean;
  }>(),
  {
    disabled: false,
    placeholder: "Your text",
  }
);
</script>

<template>
  <div class="border rounded p-2 focus:border-red-200">
    <textarea
      class="focus:outline-none w-full h-full bg-transparent"
      :placeholder="placeholder"
      :value="(modelValue as string)"
      @input="
        $emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)
      "
      :disabled="disabled"
    />
  </div>
</template>
