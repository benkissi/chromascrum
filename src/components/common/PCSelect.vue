<script setup lang="ts">
import { ref, computed } from "vue";

import { TSelectOptions, TSelectItem } from "../../utils/types";

const emit = defineEmits(["selection"]);
const props = withDefaults(
  defineProps<{
    placeholder?: string;
    options: TSelectOptions;
    existingValue?: TSelectItem;
    errorMsg?: string;
  }>(),
  {
    placeholder: "Select voting type",
    errorMsg: "",
  }
);

const selected = ref(props.existingValue);
const showList = ref(false);

const selectedDisplay = computed(() =>
  selected.value ? selected.value.text : props.placeholder
);

const handleSelection = (item: TSelectItem) => {
  selected.value = item;
  showList.value = false;

  emit("selection", item.value);
};

const isSelected = (item: TSelectItem) => {
  return item?.value === selected.value?.value;
};
</script>

<template>
  <div class="relative">
    <div
      @click="showList = !showList"
      :class="{ '!border-red-200': errorMsg }"
      class="flex items-center border rounded p-2 cursor-pointer h-[50px]"
    >
      <div :class="['flex-1 text-left', !selected && 'text-gray-400']">
        {{ selectedDisplay }}
      </div>
      <ChevronDown />
    </div>
    <div
      class="absolute bottom-[-100px] bg-white w-full border mt-1 py-2"
      v-if="showList"
    >
      <div
        v-for="(item, idx) in options"
        :key="idx"
        :class="[
          'text-left p-2 cursor-pointer',
          isSelected(item)
            ? 'bg-purple-500 text-white font-semibold'
            : 'hover:bg-purple-100',
        ]"
        @click="handleSelection(item)"
      >
        {{ item.text }}
      </div>
    </div>
  </div>
</template>
