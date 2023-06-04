<script setup lang="ts">
defineEmits(["update:modelValue"]);

withDefaults(
  defineProps<{
    modelValue: string;
    placeholder?: string;
    disabled?: boolean;
    errorMsg?: string;
  }>(),
  {
    placeholder: "Your input",
    disabled: false,
    errorMsg: "",
  }
);
</script>

<template>
  <div>
    <div
      :class="{ 'border-red-200': errorMsg }"
      class="border h-[50px] rounded p-2 focus:border-red-200"
    >
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
    <small class="text-red-500">{{ errorMsg }}</small>
  </div>
</template>
